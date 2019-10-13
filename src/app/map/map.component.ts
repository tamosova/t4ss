import { Component, OnInit, AfterViewInit } from '@angular/core';
import { latLng, icon, marker, tileLayer, Layer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

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
  
  markers: Layer[] = [];

  addMarker() {

		const newMarker = marker(

			[ 55.7558, 37.6173 ],

			{

				icon: icon({

					iconSize: [ 25, 41 ],

					iconAnchor: [ 13, 41 ],

					iconUrl: 'marker-icon.png',

					shadowUrl: 'marker-shadow.png'

				})

			}

		);

		this.markers.push(newMarker);

	}

  ngOnInit(){

    this.addMarker();
  }

  }

