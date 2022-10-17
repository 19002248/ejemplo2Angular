import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  alumnosUtl:AlumnosUtl[]=[
  {
    nombre:'Mario',
    edad: 85,
  },
  {
    nombre:'Giselle',
    edad: 22,
  },
  {
    nombre:'Leo',
    edad: 22,
  },
  {
    nombre:'Diana',
    edad: 21,
  },
  ]
  regAlum:AlumnosUtl={
    nombre:'',
    edad:0
  }
    
}
