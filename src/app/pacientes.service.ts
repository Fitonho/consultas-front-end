import { Injectable } from '@angular/core';
import { Paciente } from './paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private pacientes:Paciente[] = [
    new Paciente(
      'Filipe',
      'Paciente 1',
      '+55 19 555',
      'abc@def.com',
      3,
      0,
      2
    ),
    new Paciente(
      'Filipe',
      'Paciente 2',
      '+55 19 555',
      'ghi@def.com',
      3,
      0,
      2
    ),
    new Paciente(
      'Pedro',
      'Paciente 3',
      '+55 19 555',
      'jkl@def.com',
      5,
      2,
      1
    ),
    new Paciente(
      'Pedro',
      'Paciente 4',
      '+55 19 555',
      'mno@def.com',
      3,
      0,
      2
    ),
    new Paciente(
      'Filipe',
      'Paciente 5',
      '+55 19 555',
      'pqr@def.com',
      3,
      0,
      2
    ),

  ]

  getPacientes(){
    return [...this.pacientes]
  }

  constructor() { }
}
