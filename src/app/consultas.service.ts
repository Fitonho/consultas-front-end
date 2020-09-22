import { Injectable } from "@angular/core";
import { Consulta } from "./pacientes/consultas.model";
import { CriarConsultaComponent } from "./consultas/criar-consulta/criar-consulta.component";
import { ModalController } from "@ionic/angular";
import { BehaviorSubject, pipe } from "rxjs";
import { delay, map, switchMap, take, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth/auth.service";
import { stringify } from 'querystring';

interface ConsultaData {
  ownerId: string;
  dataConsulta: string;
  dataPagamento: string;
  paciente: string;
  pago: number;
  preco: number;
  id:string;
}

@Injectable({
  providedIn: "root",
})
export class ConsultasService {
  private _consultas = new BehaviorSubject<Consulta[]>([]);
  isLoading = false;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  get consultas() {
    return this._consultas.asObservable();
  }

  fetchConsultas() {
    return this.http
      .get<{ [key: string]: ConsultaData }>(
        "https://consultas-pagamentos.firebaseio.com/consultas.json"
      )
      .pipe(
        map((resData) => {
          const consultas: Consulta[] = [];
          for (const key in resData) {
            consultas.push(
              new Consulta(
                resData[key].ownerId,
                resData[key].paciente,
                new Date(resData[key].dataConsulta),
                resData[key].preco.toString(),
                new Date(resData[key].dataPagamento),
                resData[key].pago.toString(),
                key
              )
            );
          }
          return consultas;
        }),
        delay(1000),
        tap((consultas) => {
          console.log("requisição GET feita");
          this._consultas.next(consultas);
        }),
      );
  }

  getConsultasHoje() {
    let today = new Date();
    return this.consultas.pipe(
      map((consultas) => {
        return consultas.filter((consulta) => {
          return (
            consulta.dataConsulta.getDate() == today.getDate() &&
            consulta.dataConsulta.getMonth() == today.getMonth() &&
            consulta.dataConsulta.getFullYear() == today.getFullYear()
          );
        });
      })
    );
  }

  getProximasConsultas() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let nextWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    return this.consultas.pipe(
      map((consultas) => {
        return consultas.filter((consulta) => {
          return (
            today.getTime() <= consulta.dataConsulta.getTime() &&
            consulta.dataConsulta.getTime() <= nextWeek.getTime() &&
            consulta.dataConsulta.getTime() >= today.getTime()
          );
        });
      })
    );
  }

  getConsultasPendentes() {
    return this.consultas.pipe(
      map((consultas) => {
        return consultas.filter((consulta) => {
          return Number(consulta.pago) < Number(consulta.preco);
        });
      })
    );
  }

  openCreateAppointmentForm() {
    this.modalCtrl
      .create({
        component: CriarConsultaComponent
      })
      .then((modalElement) => {
        modalElement.present();
        return modalElement.onDidDismiss();
      })
      .then((consultaCriada) => {
        const newConsulta:ConsultaData = consultaCriada.data;
        console.log(consultaCriada.data, consultaCriada.role);
        if (consultaCriada.role === "confirm") {
          this.isLoading = true
          this.addConsulta(consultaCriada.data).subscribe(()=> this.isLoading = false)
        }
      });
  }

  openEditAppointmentForm(consulta:Consulta){
    this.modalCtrl
    .create({
      component: CriarConsultaComponent,
      componentProps: {consulta:consulta}
    })
    .then((modalElement) => {
      modalElement.present();
      return modalElement.onDidDismiss();
    })
    .then((consultaCriada) => {
      if (consultaCriada.role === "confirm") {
        console.log(consultaCriada.data)
        this.isLoading = true;
        this.updateConsulta(consultaCriada.data).subscribe(()=>this.isLoading = false)
      }
    });
  }

  updateConsulta(newConsulta: ConsultaData) {
    console.log(newConsulta.id);

    return this.http.put<{ name: string }>(
      `https://consultas-pagamentos.firebaseio.com/consultas/${newConsulta.id}.json`,
      {
        ownerId: this.authService.userId,
        ...newConsulta,
      }
    ).pipe(
        switchMap(() => {
          return this.fetchConsultas()
        })
      );
  }

  addConsulta(newConsulta: ConsultaData) {
    return this.http.post<{ name: string }>(
      "https://consultas-pagamentos.firebaseio.com/consultas.json",
      {
        ownerId: this.authService.userId,
        ...newConsulta,
      }
    ).pipe(
      switchMap(() => {
        return this.fetchConsultas();
      })
    );
  }
}