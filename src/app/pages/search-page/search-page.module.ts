import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../common/modules/material/material.module";
import { SearchPageComponent } from "./search-page.component";
import { SearchPageRoutingModule } from './search-page-routing.module';
import { ComponentsModule } from 'src/app/common/components/components.module';

@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SearchPageRoutingModule,
    ComponentsModule
  ]
})
export class SearchPageModule { }
