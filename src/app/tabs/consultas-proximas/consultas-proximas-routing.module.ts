import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasProximasPage } from './consultas-proximas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasProximasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasProximasPageRoutingModule {}
