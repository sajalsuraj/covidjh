import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isAppUpdated : boolean = false;
  constructor() { }
}
