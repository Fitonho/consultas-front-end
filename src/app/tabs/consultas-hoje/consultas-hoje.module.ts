import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasHojePageRoutingModule } from './consultas-hoje-routing.module';

import { ConsultasHojePage } from './consultas-hoje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasHojePageRoutingModule
  ],
  declarations: [ConsultasHojePage]
})
export class ConsultasHojePageModule {}
