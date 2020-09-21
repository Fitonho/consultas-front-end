import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultasService } from 'src/app/consultas.service';
import { Consulta } from 'src/app/pacientes/consultas.model';

@Component({
  selector: 'app-pendente',
  templateUrl: '../consultas-listagem.page.html',
  styleUrls: ['./pendente.page.scss'],
})
export class PendentePage implements OnInit {

  title = "Consultas pendentes";
  loadedConsultas:Consulta[];
  consultasSub: Subscription;


  constructor(
    public consultasService:ConsultasService
  ) { }

  ngOnInit() {
    this.consultasSub = this.consultasService.getConsultasPendentes().subscribe((consultas =>{
      this.loadedConsultas = consultas
    }))
  }

  ngOnDestroy(){
    if(this.consultasSub)
      this.consultasSub.unsubscribe();
  }
}
