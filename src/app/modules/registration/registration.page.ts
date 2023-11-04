/* eslint-disable one-var */
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ApiService } from './../../services/http/api.service';
import { CommonService } from './../../services/common/common.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/popover.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  folder: string;
  todayDate : any;
  dateArr = [];
  nextDate:any;
  centerData = [];

  constructor(public apiService: ApiService, public commonService:CommonService, public popoverController: PopoverController) { }

  get4Dates(first, last){
    this.dateArr = [];
    
    let start = new Date(first);
    let end = new Date(last);

    while(start < end){
      this.dateArr.push(moment(start).format('DD MMM'));
      var newDate = start.setDate(start.getDate() + 1);
      start = new Date(newDate);  
    }
    this.apiService.getVaccinationCenterByDistrict(240, moment(first).format('DD-MM-YYYY')).subscribe(data=>{
      this.centerData = data['centers'];
    })
  }

  ngOnInit() {
    this.folder = 'Slots Availability';
    this.todayDate = moment(moment()['_d']).format('YYYY-MM-DD');
    this.nextDate = moment(moment().add(4, 'days')).format('YYYY-MM-DD');
    this.get4Dates(this.todayDate, this.nextDate);
    
  }


  async openPopup(data) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true,
      componentProps:data
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  leftPage(){
    let currDate = moment(moment(this.nextDate).subtract(8, 'days')).format('YYYY-MM-DD');
    let isDateSame = moment(currDate).isSameOrAfter(this.todayDate);
    
    if(isDateSame){
      this.nextDate = moment(moment(this.nextDate).subtract(4, 'days')).format('YYYY-MM-DD');
      this.get4Dates(currDate, this.nextDate);
    }
  }

  rightPage(){
    let currDate = moment(this.nextDate).format('YYYY-MM-DD');
    this.nextDate = moment(moment(currDate).add(4, 'days')).format('YYYY-MM-DD');
    this.get4Dates(currDate, this.nextDate);
  }

}
