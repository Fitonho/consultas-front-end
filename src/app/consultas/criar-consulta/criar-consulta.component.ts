import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PacientesService } from '../../pacientes.service';
import { Paciente } from '../../paciente.model';
import { ModalController } from '@ionic/angular';
import { Consulta } from 'src/app/pacientes/consultas.model';

@Component({
  selector: 'app-criar-consulta',
  templateUrl: './criar-consulta.component.html',
  styleUrls: ['./criar-consulta.component.scss'],
})
export class CriarConsultaComponent implements OnInit {

  @Input() consulta: Consulta = new Consulta(null,null,null,null,null,null,null);
  form: FormGroup;
  pacientes: Paciente[];

  constructor(
    private pacientesService:PacientesService,
    private modalCtrl:ModalController
  ) {}

  //TODO: transformar o input de paciente em uma textBox
  ngOnInit() {
    this.form = new FormGroup({
      pacienteIndex: new FormControl(null,{
        updateOn:'change',
        validators:[Validators.required]
      }),
      preço: new FormControl(this.consulta.preco,{
        updateOn:'change',
        validators:[Validators.required,Validators.maxLength(180),Validators.min(1)]
      }),
      pago:new FormControl(this.consulta.pago,{
        updateOn:'change',
        validators:[Validators.required,Validators.min(0)]
      }),
      dataConsulta: new FormControl(this.consulta.dataConsulta?.toISOString(),{
        updateOn:'change',
        validators:[Validators.required]
      }),
      horaConsulta: new FormControl(this.consulta.dataConsulta?.toISOString(),{
        updateOn:'change',
        validators:[Validators.required]
      }),
      dataPagamento: new FormControl(this.consulta.dataPagamento?.toISOString(),{
        updateOn:'change',
        validators:[Validators.required]
      })
    })
    console.log(this.consulta);
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
      paciente: this.pacientes[this.form.value.pacienteIndex].nome
      ,preco: this.form.value.preço
      ,pago: this.form.value.pago
      ,dataConsulta: dayDate.toISOString()
      ,dataPagamento: this.form.value.dataPagamento
      ,id:this.consulta.id
    },'confirm')
  }
}
