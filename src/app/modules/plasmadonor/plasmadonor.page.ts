import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/http/api.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { CommonService } from './../../services/common/common.service';

@Component({
  selector: 'app-plasmadonor',
  templateUrl: './plasmadonor.page.html',
  styleUrls: ['./plasmadonor.page.scss'],
})
export class PlasmadonorPage implements OnInit {

  folder = "Plasma Donor Helpline";
  helperList = [];

  constructor(private apiService: ApiService, public commonService:CommonService, private callNumber: CallNumber) { }

  ngOnInit() {
    this.apiService.getPlasmaDonorHelp().subscribe(data=>{
      if(data['status']){
        this.helperList = data['data'];
      }
    },
    error =>{

    });
  }

  callNum(phone){
    this.callNumber.callNumber(phone, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

}
