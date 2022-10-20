import { Component, EventEmitter, Input, Output} from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  //necesitamos el arreglo y como trabajamos con  input lo referenciamos
  //arreglo copia de donde guardamos los registros, para que haga match con los campos del formulario
  /*@Input() alumnosUtl:AlumnosUtl[]=[];*/
  //objeto
  
  @Input() regAlum:AlumnosUtl={
    nombre:'',
    edad:0
  };

  //@Output() onNA:EventEmitter<AlumnosUtl>= new EventEmitter();
  constructor(private UtlService:UtlService) { }
  agregar(){
    //console.log(this.alumnosUtl)
    /*this.alumnosUtl.push(this.regAlum);*/

    //este objeto podrá llegar hasta el padre
  //  this.onNA.emit(this.regAlum);
    this.UtlService.agregarNA(this.regAlum);
    this.regAlum={
      nombre:'',
      edad:0
    }
  }

}
