import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisclaimerPageRoutingModule } from './disclaimer-routing.module';
import {ComponentsModule} from '../../components/component.module';

import { DisclaimerPage } from './disclaimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisclaimerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DisclaimerPage]
})
export class DisclaimerPageModule {}
