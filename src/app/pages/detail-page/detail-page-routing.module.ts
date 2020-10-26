import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './detail-page.component';
import { DetailAccessGuardGuard } from "../../common/services/detail-access.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [DetailAccessGuardGuard],
    component: DetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPageRoutingModule { }