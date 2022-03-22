import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CovidCaseService } from './services/covid-case.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TotalCaseComponent } from './components/total-case/total-case.component';
import { CaseDetailsService } from './services/case-details.service';
import { AdressService } from './services/adress.service';

@NgModule({
  declarations: [AppComponent, OverviewComponent, TotalCaseComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [CovidCaseService, CaseDetailsService, AdressService],
  bootstrap: [AppComponent],
})
export class AppModule {}
