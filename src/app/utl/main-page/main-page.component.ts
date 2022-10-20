import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  // el arreglo lo mandamos a servicio 
  regAlum:AlumnosUtl={
    nombre:'',
    edad:0
  }

  //aquí hacemos una inyección de un servicio
  constructor(){}

    // pasar parámetros del hijo al padre
    //este método nos va a permitir agregarle al arreglo un elemento
 
}
