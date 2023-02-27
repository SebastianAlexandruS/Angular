import { Component, Input, OnChanges } from '@angular/core';
import { LngLat, MapLayerMouseEvent } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {

  @Input() locations: any[] = [];

  pointsLayer: any[] = [];
  linesLayer: any[] = [];
  polygonsLayer: any[] = [];
  map: any;
  center: LngLat = new LngLat(25.610474, 45.649950);
  zoom: [number] = [13];
  selectedElement!: GeoJSON.GeoJsonProperties;
  selectedLngLat!: LngLat;

  polygonLayerPaint = {
    'fill-color': 'rgba(200, 100, 240, 0.4)',
    'fill-outline-color': 'rgba(200, 100, 240, 1)'
  }
  
    lineLayerPaint = {
      'circle-radius': 10,
      'circle-color': '#ff0000',
    };

  centerMap(evt: MapLayerMouseEvent, name: String) {
    this.center = evt.lngLat;
    this.zoom = [15];
    this.selectedElement = name;
    this.selectedLngLat = evt.lngLat;
  }

  activateHoverOn() {
    this.polygonLayerPaint = {
      'fill-color': 'rgba(200, 100, 240, 1)',
      'fill-outline-color': 'rgba(200, 100, 240, 1)'
    }
  }

  disableHover() {
    this.polygonLayerPaint = {
      'fill-color': 'rgba(200, 100, 240, 0.4)',
      'fill-outline-color': 'rgba(200, 100, 240, 1)'
    }
  }

    updateData(locations: any[]) {
    locations.forEach(location => {
      let featureType = "Feature";
      let featureProperties: GeoJSON.GeoJsonProperties = location.properties
      switch(location.geometry.type) {
        case "Point":
          let geometryPoint: GeoJSON.Point = {
            type: location.geometry.type, 
            coordinates: location.geometry.pointCoordinates
          };
          let pointFeature = {
            type: featureType,
            geometry: geometryPoint,
            properties: featureProperties
          }
          this.pointsLayer.push(pointFeature)
          break;
        case "LineString":
          let geometryLine: GeoJSON.LineString = {
            type: location.geometry.type, 
            coordinates: location.geometry.lineCoordinates
          };
          let lineFeature = {
            type: featureType,
            geometry: geometryLine,
            properties: featureProperties
          }
          this.linesLayer.push(lineFeature)
          break;
        case "Polygon":
          let geometryPolygon: GeoJSON.Polygon = {
            type: location.geometry.type, 
            coordinates: location.geometry.polygonCoordinates
          };
          let polygonFeature = {
            type: featureType,
            geometry: geometryPolygon,
            properties: featureProperties
          }
          this.polygonsLayer.push(polygonFeature)
          break;
      }
    })
  }

  ngOnChanges(): void {
    this.updateData(this.locations)
  }
}
