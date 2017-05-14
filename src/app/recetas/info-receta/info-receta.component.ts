import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from '../receta';
import { ListaCompraService } from '../../lista-compra/lista-compra.service';
import { RecetaService } from '../receta.service';
import { Subscription } from 'rxjs/Rx';
@Component({
selector: 'app-info-receta',
templateUrl: './info-receta.component.html',
styleUrls: ['./info-receta.component.css']
})
export class InfoRecetaComponent implements OnInit, OnDestroy {
private subscripcion: Subscription;
private recetaIndice: number;
recetaSeleccionada: Receta;
constructor(private listaCompraService: ListaCompraService, private route:
ActivatedRoute, private recetaService: RecetaService, private router: Router) { }
ngOnInit() {
this.subscripcion = this.route.params.subscribe(
(params: any) => {
this.recetaIndice = params['id'];
this.recetaSeleccionada = this.recetaService.getReceta(this.recetaIndice);
}
);
}
ngOnDestroy() {
this.subscripcion.unsubscribe();
}
anadirAListaCompra() {
this.listaCompraService.anadirIngredientes(this.recetaSeleccionada.ingredientes);
}
editar() {
this.router.navigate(['/recetas', this.recetaIndice, 'editar']);
}
eliminar() {
this.recetaService.eliminarReceta(this.recetaSeleccionada);
this.router.navigate(['/recetas']);
}
}