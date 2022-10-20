import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})

export class UtlService {
//podemos pensar en un servicio como un lugar por donde pasan las cosas

//usamos guión bajo para indicar que es privado, no interfiere, pero 
//por buenas prácticas se le pone

  private _alumnosUtl:AlumnosUtl[]=[
  {
    nombre:'Mario',
    edad: 85,
  },
  {
    nombre:'Giselle',
    edad: 22,
  },
  {
    nombre:'Gabriel',
    edad: 23,
  },
  {
    nombre:'Diana',
    edad: 21,
  },
  ]

  get alumnosUtl():AlumnosUtl[]{
    return[...this._alumnosUtl];
  }

  constructor() { }
  
  agregarNA(alumno:AlumnosUtl){
    this._alumnosUtl.push(alumno);
  }

}
