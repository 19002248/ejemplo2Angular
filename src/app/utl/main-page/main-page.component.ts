import { Component, OnInit } from '@angular/core';

interface AlumnosUtl{
  nombre:string;
  edad:number;
}

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
    
  agregar(){
    //console.log(this.alumnosUtl)
    this.alumnosUtl.push(this.regAlum);
    this.regAlum={
      nombre:'',
      edad:0
    }
  }


}
