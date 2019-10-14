import { Component, OnInit, AfterViewInit} from '@angular/core';
import { latLng, icon, marker, tileLayer, Layer } from 'leaflet';
import {MarkerCatteryService} from "../marker-cattery.service";
import { CatteryInfo } from '../cattery-info';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private markerCatteryService: MarkerCatteryService) { }
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

  catteries: CatteryInfo[];

  addCatteriesToMap() {
    this.markerCatteryService.getCatteries()
    .subscribe({
      next: catteries => this.catteries = catteries,
      complete: () => this.addMarkers()
    });
  }

  addMarkers()
  {
    this.catteries.forEach(cattery => {
      let newMarker = marker(
        [cattery.coordX, cattery.coordY],
        {
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'marker-icon.png',
            shadowUrl: 'marker-shadow.png'
          })
        }
      );
      newMarker.bindPopup(this.getMarkerPopupContent(cattery));
      this.markers.push(newMarker);      
    }); 
  }

  public getMarkerPopupContent(cattery: CatteryInfo):string {
    return `<h4>Cattery ${cattery.name}</h4>Website: <a href='${cattery.website}' target="_blank">${cattery.website}</a>
    <p>Contact: <a href='mailto:${cattery.contactInfo}'>${cattery.contactInfo}</a></p>`;
}

  ngOnInit(){
    this.addCatteriesToMap();
  }

}

