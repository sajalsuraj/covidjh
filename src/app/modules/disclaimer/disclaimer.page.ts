import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common/common.service';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.page.html',
  styleUrls: ['./disclaimer.page.scss'],
})
export class DisclaimerPage implements OnInit {

  folder = "Disclaimer";
  constructor(public commonService:CommonService) { }

  ngOnInit() {
  }

}
