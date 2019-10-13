import { Component, OnInit, AfterViewInit } from '@angular/core';
import { latLng, LatLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  constructor() { }
  optionsSpec: any = {

		layers: [{ url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map' }],

		zoom: 4,

		center: [ 51.8684131, 14.6487827]

	};
  options = {

		layers: [ tileLayer(this.optionsSpec.layers[0].url, { attribution: this.optionsSpec.layers[0].attribution }) ],

		zoom: this.optionsSpec.zoom,

		center: latLng(this.optionsSpec.center)

	};

  ngOnInit(){}

  ngAfterViewInit() {
    // console.log(L);
    // const map = L.map('map').setView([51.505, -0.09], 13);

    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);
     }
  }

