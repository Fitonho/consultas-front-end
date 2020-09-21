import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultasService } from 'src/app/consultas.service';
import { Consulta } from 'src/app/pacientes/consultas.model';

@Component({
  selector: 'app-consultas-hoje',
  templateUrl: '../consultas-listagem.page.html',
  styleUrls: ['./consultas-hoje.page.scss'],
})
export class ConsultasHojePage implements OnInit,OnDestroy {
  title = "Consultas hoje";
  loadedConsultas: Consulta[];
  consultasSub: Subscription;

  constructor(
    private consultasService:ConsultasService
  ) { }

  ngOnInit() {
    this.consultasService.getConsultasHoje().subscribe((consultas)=>{
      this.loadedConsultas = consultas
    })
  }

  ngOnDestroy(){
    if(this.consultasSub)
      this.consultasSub.unsubscribe();
  }

}
