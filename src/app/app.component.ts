import { Component } from '@angular/core';
import { ApiService } from './services/http/api.service';
import { CommonService } from './services/common/common.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activeIndex = 0;
  activeIndex2 = 0;
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: "Ranchi's Covid Status", url: '/coviddata', icon: 'heart-half' },
    { title: 'Vaccination Slots', url: '/registration', icon: 'heart-half' },
    { title: 'Plasma Donor Helpline', url: '/plasmadonorhelpline', icon: 'call' },
    {title: 'Disclaimer', url: '/disclaimer', icon: 'book'}
  ];
  // public labels = [
  //   {title: 'Disclaimer', url: '/disclaimer'}
  // ];
  constructor(private platform: Platform, private apiService: ApiService, private splashScreen : SplashScreen, private statusBar: StatusBar, public commonService: CommonService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      statusBar.backgroundColorByHexString('#ffffff');
      statusBar.styleLightContent();
    });
  }

  ngOnInit(){
    this.apiService.getappdata().subscribe((data)=>{
      if(data['status']){
        this.commonService.isAppUpdated = data['data']['is_app_updated'] == "1";
      }
    })
  }
}
