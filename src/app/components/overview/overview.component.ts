import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CaseDetailsService } from '../../services/case-details.service';
import { CaseOverView } from '../../Models/case-overview';
import { CaseProvince } from '../../Models/case-province';
import { CovidCaseService } from '../../services/covid-case.service';
import { CaseCovid } from '../../Models/case-covid';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public locations: CaseProvince[];
  public filteredItems: CaseProvince[];
  public overview: CaseOverView[];
  public nameCity: string = "";
  public lastUpdate: string;
  public caseCovid: CaseCovid;
  public LOCAL_ADDRESS_KEY: string = 'localAddress';
  isShowToast: boolean = false;
  isMobile: boolean = false;

  @Output('lastUpdate') lastUpdateHandle = new EventEmitter<string>();

  constructor(
    private covidCaseService: CovidCaseService,
    private caseDetailsService: CaseDetailsService,
    private deviceDetectService: DeviceDetectorService
  ) {
    this.isMobile = this.deviceDetectService.isMobile();
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.subscription = this.covidCaseService.GetCaseCovids().subscribe(
      (data) => {
        this.caseCovid = data;
        this.locations = data.locations;
        this.assignCopy();
        this.overview = data.overview;
        this.lastUpdate = this.overview[this.overview.length - 1].date;

        this.lastUpdateHandle.emit(this.lastUpdate);
        this.getSaveLocal();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getSaveLocal() {
    let provinceName = localStorage.getItem(this.LOCAL_ADDRESS_KEY) || '';
    this.nameCity = provinceName;
    this.search();
  }

  search() {
    if (!this.nameCity || this.nameCity === '') this.assignCopy();
    else
      this.filteredItems = Object.assign([], this.locations).filter(
        (item) =>
          this.removeAccents(item.name)
            .toLowerCase()
            .indexOf(this.removeAccents(this.nameCity).toLowerCase()) > -1
      );
  }

  assignCopy() {
    this.filteredItems = this.locations;
  }

  removeAccents(str: string) {
    var AccentsMap = [
      'aàảãáạăằẳẵắặâầẩẫấậ',
      'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
      'dđ',
      'DĐ',
      'eèẻẽéẹêềểễếệ',
      'EÈẺẼÉẸÊỀỂỄẾỆ',
      'iìỉĩíị',
      'IÌỈĨÍỊ',
      'oòỏõóọôồổỗốộơờởỡớợ',
      'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
      'uùủũúụưừửữứự',
      'UÙỦŨÚỤƯỪỬỮỨỰ',
      'yỳỷỹýỵ',
      'YỲỶỸÝỴ',
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }

  saveLocal(name: string) {
    localStorage.setItem(this.LOCAL_ADDRESS_KEY, name);
    this.isShowToast = true;
    setTimeout(() => {
      this.isShowToast = false;
    },1000)
  }

  reset() {
    this.nameCity = '';
    this.search();
  }
}
