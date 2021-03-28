import { Component, OnInit,ViewEncapsulation } from '@angular/core';

declare let L;
declare let tomtom: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapsComponent implements OnInit {

  constructor() { }

	  ngOnInit() {
        const map = tomtom.L.map('map', {
          key: 'Bk1jIjy8ZLFAx79H9gtW22Xv3eIngLRo',
          basePath: '/assets/sdk',
          center: [ 50.82981034192546, 4.387060588351827 ],
          zoom: 15,
          source : 'vector'
        });
    }
  }
