import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../common/modules/material/material.module";
import { DetailPageComponent } from "./detail-page.component";
import { DetailPageRoutingModule } from './detail-page-routing.module';

@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DetailPageRoutingModule
  ]
})
export class DetailPageModule { }
