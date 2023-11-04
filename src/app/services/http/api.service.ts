import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://www.ranchiblog.in/covinfo/';

  constructor(private http: HttpClient) { }

  getDistricts(){
    return this.http.get(this.baseUrl+'/get/fetchjharkhanddistricts');
  }

  getVaccinationStatus(distId){
    return this.http.get(this.baseUrl+'get/fetchvaccinationstatus?district_id='+distId);
  }

  getVaccinationCenterByDistrict(distId, date){
    return this.http.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id='+distId+'&date='+date);
  }

  getPlasmaDonorHelp(){
    return this.http.get(this.baseUrl+'get/plasmadonorhelp');
  }

  getappdata(){
    return this.http.get(this.baseUrl+'get/appdata');
  }

  getCovidCasesData(){
    return this.http.get('https://api.covid19india.org/v4/min/data.min.json');
  }
}
