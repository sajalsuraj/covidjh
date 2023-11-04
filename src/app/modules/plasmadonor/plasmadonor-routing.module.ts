import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlasmadonorPage } from './plasmadonor.page';

const routes: Routes = [
  {
    path: '',
    component: PlasmadonorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlasmadonorPageRoutingModule {}
