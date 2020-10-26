import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from "./user-card/user-card.component";
import { MaterialModule } from '../modules/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [UserCardComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserCardComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
