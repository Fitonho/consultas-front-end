import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasHojePage } from './consultas-hoje.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasHojePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasHojePageRoutingModule {}
