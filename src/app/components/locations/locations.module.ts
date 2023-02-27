import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { LocationsComponent } from './locations.component';
import { MapModule } from './map/map.module';



@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    NgxMapLibreGLModule,
    MapModule
  ],
  exports: [
    LocationsComponent
  ]
})
export class LocationsModule { }
