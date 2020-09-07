import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PacientesService } from '../../pacientes.service';
import { Paciente } from '../../paciente.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-criar-consulta',
  templateUrl: './criar-consulta.component.html',
  styleUrls: ['./criar-consulta.component.scss'],
})
export class CriarConsultaComponent implements OnInit {

  form: FormGroup;
  pacientes: Paciente[]

  constructor(
    private pacientesService:PacientesService,
    private modalCtrl:ModalController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      pacienteIndex: new FormControl(null,{
        updateOn:'change',
        validators:[Validators.required]
      }),
      preço: new FormControl(null,{
        updateOn:'change',
        validators:[Validators.required,Validators.maxLength(180)]
      }),
      pago:new FormControl(null,{
        updateOn:'change',
        validators:[Validators.required,Validators.min(1)]
      }),
      dataConsulta: new FormControl(null,{
        updateOn:'change',
        validators:[Validators.required]
      }),
      horaConsulta: new FormControl(null,{
        updateOn:'change',
        validators:[Validators.required]
      }),
      dataPagamento: new FormControl(null,{
        updateOn:'change',
        validators:[Validators.required]
      })
    })

    this.pacientes = this.pacientesService.getPacientes();
  }

  onCancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }

  onCreateAppointment(){
    if(!this.form.valid){
      return;
    }

    let dayDate = new Date(this.form.value.dataConsulta)
    let hourDate = new Date(this.form.value.horaConsulta)
    dayDate.setHours(hourDate.getHours())
    dayDate.setMinutes(hourDate.getMinutes())

    this.modalCtrl.dismiss({
      paciente: this.form.value.pacienteIndex
      ,preco: this.form.value.preço
      ,pago: this.form.value.pago
      ,dataConsulta: dayDate.toISOString()
      ,dataPagamento: this.form.value.dataPagamento
    },'confirm')
  }
}
