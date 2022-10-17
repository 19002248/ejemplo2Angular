import { Component, Input, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  @Input() alumnosUtl:AlumnosUtl[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}

