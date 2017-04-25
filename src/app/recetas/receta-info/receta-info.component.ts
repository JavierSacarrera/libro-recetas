import { Component, OnInit, Input } from '@angular/core';
import {Receta} from '../receta';

@Component({
  selector: 'app-receta-info',
  templateUrl: './receta-info.component.html',
  styleUrls: ['./receta-info.component.css']
})
export class RecetaInfoComponent implements OnInit {

  @Input() recetaSeleccionada: Receta;

  constructor() { }

  ngOnInit() {
  }

}
