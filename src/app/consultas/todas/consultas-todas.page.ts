import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultasService } from '../../consultas.service';
import { Consulta } from '../../pacientes/consultas.model';

@Component({
  selector: 'app-consultas-todas',
  templateUrl: '../consultas-listagem.page.html',
  styleUrls: ['./consultas-todas.page.scss'],
})
export class ConsultasTodasPage implements OnInit,OnDestroy {

  title = "Todas as consultas";
  loadedConsultas:Consulta[];
  consultasSub: Subscription;


  constructor(
    public consultasService:ConsultasService
  ) { }

  ngOnInit() {
    this.consultasSub = this.consultasService.consultas.subscribe((consultas =>{
      this.loadedConsultas = consultas
    }))
  }

  ngOnDestroy(){
    if(this.consultasSub)
      this.consultasSub.unsubscribe();
  }

}
