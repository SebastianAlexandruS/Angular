import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    NgxMapLibreGLModule,
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
