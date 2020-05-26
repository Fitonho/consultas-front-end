import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';

import { Paciente } from 'src/app/paciente.model'

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {

  loadedPacientes: Paciente[]

  constructor(
    private pacientesService:PacientesService
  ) {}

  ngOnInit() {
    this.loadedPacientes = this.pacientesService.getPacientes();
  }

}
