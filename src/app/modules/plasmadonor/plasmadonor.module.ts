import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlasmadonorPageRoutingModule } from './plasmadonor-routing.module';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { PlasmadonorPage } from './plasmadonor.page';
import {ComponentsModule} from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlasmadonorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlasmadonorPage],
  providers:[
    CallNumber
  ]
})
export class PlasmadonorPageModule {}
