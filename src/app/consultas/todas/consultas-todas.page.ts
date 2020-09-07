import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/consultas.service';
import { Consulta } from 'src/app/pacientes/consultas.model';

@Component({
  selector: 'app-consultas-todas',
  templateUrl: '../consultas-listagem.page.html',
  styleUrls: ['./consultas-todas.page.scss'],
})
export class ConsultasTodasPage implements OnInit {

  loadedConsultas:Consulta[]

  constructor(
    public consultasService:ConsultasService
  ) { }

  ngOnInit() {
    this.loadedConsultas = this.consultasService.consultas
  }

}
