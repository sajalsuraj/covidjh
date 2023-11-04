import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoviddataPageRoutingModule } from './coviddata-routing.module';
import {ComponentsModule} from '../../components/component.module';
import { CoviddataPage } from './coviddata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoviddataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CoviddataPage]
})
export class CoviddataPageModule {}
