import { Component, OnInit, LOCALE_ID } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import 'rxjs/add/operator/share';
import * as moment from 'moment';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'My Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Perodic Table',  icon:'content_paste', class: '' },
    //{ path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'My Address',  icon:'location_on', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  name = 'Angular 4';
  date:String;
  hours:any;
  minutes:any;
  seconds:any;
  currentLocale: any;

  isTwelveHrFormat:false;
  test:any;

  constructor(){
    //   let now = moment(); // add this 2 of 4
      //navigator.language || navigator.userLanguage; 
 
  //var test = moment('2016-01-24 14:23:45');
 
        //ja-JP;
  //de-DE
   
   }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    setInterval(() =>{
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
      //console.log("The current Date: "+ this.date);
       }, 1000);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
 // IntervalObservable.create(1000).map(tick => new Date()).share()   
    // .subscribe( res =>{
     
    //   this.date = res;
    //    this.hours =  this.date.getHours();
    //    this.minutes = this.date.getMinutes();
    //    this.seconds = this.date.getSeconds();
    // }) 