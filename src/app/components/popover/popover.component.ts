import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  centerData : any;
  constructor(public navParams: NavParams, public popoverController: PopoverController) { }

  ngOnInit() {
    this.centerData = this.navParams.data;
    console.log(this.centerData);
  }

}
