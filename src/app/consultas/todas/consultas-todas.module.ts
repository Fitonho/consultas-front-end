import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasTodasPageRoutingModule } from './consultas-todas-routing.module';

import { ConsultasTodasPage } from './consultas-todas.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ConsultasTodasPageRoutingModule
  ],
  declarations: [ConsultasTodasPage]
})
export class ConsultasTodasPageModule {}
