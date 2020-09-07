import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-criar-paciente',
  templateUrl: './criar-paciente.component.html',
  styleUrls: ['./criar-paciente.component.scss'],
})
export class CriarPacienteComponent implements OnInit {

  form: FormGroup

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      telefone: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email]
      })
    })
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onCreatePacient() {
    if(!this.form.valid){
      return;
    }

    this.modalCtrl.dismiss({
      nome: this.form.value.nome,
      telefone: this.form.value.telefone,
      email: this.form.value.email
    },'confirm')
  }

}
