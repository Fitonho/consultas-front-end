import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultasService } from 'src/app/consultas.service';
import { Consulta } from 'src/app/pacientes/consultas.model';

@Component({
  selector: 'app-consultas-proximas',
  templateUrl: '../consultas-listagem.page.html',
  styleUrls: ['./consultas-proximas.page.scss'],
})
export class ConsultasProximasPage implements OnInit,OnDestroy {

  title = "Consultas na próxima semana";
  loadedConsultas:Consulta[];
  consultasSub: Subscription;


  constructor(
    public consultasService:ConsultasService
  ) { }

  ngOnInit() {
    this.consultasSub = this.consultasService.getProximasConsultas().subscribe((consultas =>{
      this.loadedConsultas = consultas
    }))
  }

  ngOnDestroy(){
    if(this.consultasSub)
      this.consultasSub.unsubscribe();
  }

}
