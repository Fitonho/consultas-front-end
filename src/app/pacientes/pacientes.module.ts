import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesPageRoutingModule } from './pacientes-routing.module';

import { PacientesPage } from './pacientes.page';
import { CriarPacienteComponent } from './criar-paciente/criar-paciente.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PacientesPageRoutingModule
  ],
  declarations: [PacientesPage,CriarPacienteComponent]
})
export class PacientesPageModule {}
