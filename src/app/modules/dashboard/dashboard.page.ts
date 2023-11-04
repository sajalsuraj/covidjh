/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/http/api.service';
import { CommonService } from './../../services/common/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public folder: string;

  todayCount = 'NA';
  totalCount = 'NA';
  totalDose1 = 'NA';
  totalDose2 = 'NA';
  coviShield = 'NA';
  covaxin = 'NA';

  constructor(private activatedRoute: ActivatedRoute, public commonService:CommonService, public apiService: ApiService) { }

  ngOnInit() {
    this.folder = 'Home';
    this.apiService.getVaccinationStatus(240).subscribe(data=>{
      if(data['status']){
        this.todayCount = data['data']['vaccinationData']['today'];
        this.totalCount = data['data']['vaccinationData']['total_doses'];
        this.totalDose1 = data['data']['vaccinationData']['tot_dose_1'];
        this.totalDose2 = data['data']['vaccinationData']['tot_dose_2'];
        this.coviShield = data['data']['vaccinationData']['covishield'];
        this.covaxin = data['data']['vaccinationData']['covaxin'];
      }
    });
  }

}
