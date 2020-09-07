import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasProximasPageRoutingModule } from './consultas-proximas-routing.module';

import { ConsultasProximasPage } from './consultas-proximas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasProximasPageRoutingModule
  ],
  declarations: [ConsultasProximasPage]
})
export class ConsultasProximasPageModule {}
