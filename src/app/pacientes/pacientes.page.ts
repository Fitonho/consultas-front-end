import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';

import { Paciente } from 'src/app/paciente.model'
import { ModalController } from '@ionic/angular';
import { CriarPacienteComponent } from './criar-paciente/criar-paciente.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {

  loadedPacientes: Paciente[]

  constructor(
    private pacientesService:PacientesService,
    private modalCtrl:ModalController
  ) {}

  ngOnInit() {
    this.loadedPacientes = this.pacientesService.getPacientes();
  }

  openCreatePacientForm(){
    this.modalCtrl.create({
      component:CriarPacienteComponent
    })
    .then(modalElement => {
      modalElement.present();
      return modalElement.onDidDismiss();
    })
    //ainda ta em formato de forms. arrumar pra pegar só o conteúdo necessário
    .then(personCreated =>{
      console.log(personCreated.data,personCreated.role);
    })
  }

}
