import { Injectable } from '@angular/core';
import { Consulta } from './pacientes/consultas.model';
import { CriarConsultaComponent } from './consultas/criar-consulta/criar-consulta.component';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private _consultas: Consulta[] = [
    new Consulta(
      'Filipe',
      'Paciente 1',
      new Date(2020, 4, 28, 22),
      '49,99',
      new Date(2020, 6, 30),
      '0',
      'Pendente de pagamento',
      0,0,0
    ),
    new Consulta(
      'Filipe',
      'Paciente 1',
      new Date(2020, 4, 30, 14),
      '49,99',
      new Date(2020, 7, 30),
      '0',
      'Pendente de pagamento',
      0,0,0
    ),
    new Consulta(
      'Filipe',
      'Paciente 1',
      new Date(2020, 5, 3, 21),
      '49,99',
      new Date(2020, 8, 30),
      '0',
      'Pendente de pagamento',
      0,0,0
    ),
    new Consulta(
      'Filipe',
      'Paciente 3',
      new Date(2020, 5, 27, 16),
      '49,99',
      new Date(2020, 5, 30),
      '0',
      'Pendente de pagamento',
      0,0,0
    ),
    new Consulta(
      'Filipe',
      'Paciente 2',
      new Date(2020, 5, 27, 16),
      '49,99',
      new Date(2020, 5, 30),
      '0',
      'Pendente de pagamento',
      0,0,0
    ),
  ]

  constructor(
    private modalCtrl:ModalController
  ) { }

  get consultas() {
    return [...this._consultas]
  }

  getTodayConsultas() {
    let today = new Date();
    return this.consultas.filter((consulta) => {
      return consulta.dataConsulta.getDate() == today.getDate() &&
        consulta.dataConsulta.getMonth() == today.getMonth() &&
        consulta.dataConsulta.getFullYear() == today.getFullYear()
    })
  }

  getProximasConsultas() {
    let today = new Date();
    let nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    return this.consultas.filter((consulta) => {
      return today.getTime() <= consulta.dataConsulta.getTime() &&
        consulta.dataConsulta.getTime() <= nextWeek.getTime()
    })
  }

  openCreateAppointmentForm(){
    this.modalCtrl.create({
      component:CriarConsultaComponent
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
