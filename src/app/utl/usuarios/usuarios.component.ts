import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

    form = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required]),
  });
  ngOnInit(): void {
  }
  guardarUsuario(){
    console.log('Registro Guardado');
  }
  obtenerErrorN(){
    var nom=this.form.get('nombre');
    if(nom?.hasError('required')){
      return 'El campo Nombre es requerido';
    }
    if(nom?.hasError('minlength')){
      return 'Ingresa más de 3 caracteres';
    }
    return '';
  }

  obtenerErrorP(){
    var pass=this.form.get('password');
    if(pass?.hasError('required')){
      return 'El campo de Password es requerido';
    }
    return '';
  }
}
