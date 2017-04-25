import { Component, Output, EventEmitter } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent {
  recetas: Array<Receta> = [];
  @Output() recetaSeleccionada = new EventEmitter<Receta>();
  receta: Receta = new Receta ('Receta 1', 'Una descripcion de la receta', 'https://mejorconsalud.com/wp-content/uploads/2014/06/manzanas.jpg', []);
  constructor() { }

  seleccionarReceta(){
    this.recetaSeleccionada.emit(this.receta);
  }


}
