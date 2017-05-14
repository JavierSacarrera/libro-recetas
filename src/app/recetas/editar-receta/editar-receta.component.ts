import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from
'@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';
@Component({
selector: 'app-editar-receta',
templateUrl: './editar-receta.component.html',
styleUrls: ['./editar-receta.component.css']
})
export class EditarRecetaComponent implements OnInit, OnDestroy {formularioReceta: FormGroup;
private subscripcion: Subscription;
private esNueva = true;
private receta: Receta;
private recetaIndice: number;
constructor(private route: ActivatedRoute, private recetaService: RecetaService, private router: Router, private formBuilder: FormBuilder) { }
ngOnInit() {
this.subscripcion = this.route.params.subscribe((params: any) => {if (params.hasOwnProperty('id')) {
this.esNueva = false;
this.recetaIndice = params['id'];
this.receta = this.recetaService.getReceta(this.recetaIndice);
} else {
this.esNueva = true;
this.receta = null;
}
this.inicializarFormulario();
}
);
}
ngOnDestroy() {
this.subscripcion.unsubscribe();
}
enviarFormulario() {
const recetaNueva = this.formularioReceta.value;
if (this.esNueva) {
this.recetaService.anadirReceta(recetaNueva);
} else {
this.recetaService.editarReceta(this.receta, recetaNueva);
}
this.volver();
}
cancelar() {
this.volver();
}
anadirItem(nombre: string, cantidad: number) {
(<FormArray>this.formularioReceta.controls['ingredientes']).push(
new FormGroup({
nombre: new FormControl(nombre, Validators.required),
cantidad: new FormControl(cantidad, [Validators.required,
Validators.pattern('\\d+')])
})
);
}
eliminarItem(indice: number) {
(<FormArray>this.formularioReceta.controls['ingredientes']).removeAt(indice);
}
private inicializarFormulario() {
let nombreReceta = '';
let descripcionReceta = '';
let imagenUrlReceta = '';
let ingredientesReceta: FormArray = new FormArray([]);
if (!this.esNueva) {
for (let i = 0; i < this.receta.ingredientes.length; i++) {
ingredientesReceta.push(
new FormGroup({
nombre: new FormControl(this.receta.ingredientes[i].nombre,Validators.required),cantidad: new FormControl(this.receta.ingredientes[i].cantidad,[Validators.required, Validators.pattern('\\d+')])
})
);
}
nombreReceta = this.receta.nombre;
descripcionReceta = this.receta.descripcion;
imagenUrlReceta = this.receta.imagenUrl;
}
this.formularioReceta = this.formBuilder.group({
nombre: [nombreReceta, Validators.required],
descripcion: [descripcionReceta, Validators.required],
imagenUrl: [imagenUrlReceta, Validators.required],
ingredientes: ingredientesReceta
});
}
private volver() {
this.router.navigate(['../']);
}
}