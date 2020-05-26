import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasTodasPage } from './consultas-todas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasTodasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasTodasPageRoutingModule {}
