import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';
@Component({
selector: 'app-lista-recetas',
templateUrl: './lista-recetas.component.html',
styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent implements OnInit {
recetas: Array<Receta> = [];
constructor(private recetaService: RecetaService) { }
ngOnInit() {
this.recetas = this.recetaService.getRecetas();
}
}
