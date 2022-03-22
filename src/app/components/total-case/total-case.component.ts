import { Component, OnInit, Input } from '@angular/core';
import { CaseCovid } from '../../Models/case-covid';
import { Case } from '../../Models/case-total';

@Component({
  selector: 'app-total-case',
  templateUrl: './total-case.component.html',
  styleUrls: ['./total-case.component.css']
})
export class TotalCaseComponent implements OnInit {

  @Input('caseCovid')
  set caseCovid(caseCovid : CaseCovid){
    this.totalInternal = caseCovid?.total.internal;
    this.todayInternal = caseCovid?.today.internal;
  }

  public totalInternal : Case;
  public todayInternal : Case;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
