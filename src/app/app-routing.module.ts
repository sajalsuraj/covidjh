import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./modules/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'plasmadonorhelpline',
    loadChildren: () => import('./modules/plasmadonor/plasmadonor.module').then( m => m.PlasmadonorPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./modules/disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'coviddata',
    loadChildren: () => import('./modules/coviddata/coviddata.module').then( m => m.CoviddataPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
