import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./pages/search-page/search-page.module').then(m => m.SearchPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail-page/detail-page.module').then(m => m.DetailPageModule)
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
