import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/http/api.service';
import { CommonService } from './../../services/common/common.service';

@Component({
  selector: 'app-coviddata',
  templateUrl: './coviddata.page.html',
  styleUrls: ['./coviddata.page.scss'],
})
export class CoviddataPage implements OnInit {

  public folder: string;

  totalConfirmed = 'NA';
  totalRecovered = 'NA';
  totalDeaths = 'NA';

  constructor(public commonService:CommonService, public apiService: ApiService) { }

  ngOnInit() {
    this.folder = 'Covid Case Status';
    this.apiService.getCovidCasesData().subscribe(data=>{
      let covidData = data['JH']['districts']['Ranchi'];
      this.totalConfirmed = covidData['total']['confirmed'];
      this.totalRecovered = covidData['total']['recovered'];
      this.totalDeaths = covidData['total']['deceased'];
    });
  }

}
