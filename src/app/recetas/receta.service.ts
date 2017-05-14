import { Injectable } from '@angular/core';
import { Receta } from './receta';
import { Ingrediente } from '../shared/ingrediente';
@Injectable()
export class RecetaService {
private recetas: Array<Receta> = [
new Receta('Paleto', 'Pan tostado con tomate y jamon',
'http://blogs.cadenaser.com/tinta-de-calamar/files/2013/07/tomaquet02.jpg', [
new Ingrediente('Pan', 2),
new Ingrediente('Tomate', 1),
new Ingrediente('Jamon', 2)
]),
new Receta('Pan con tomate', 'Dos rebanadas de pan, con tomate estrujado porarriba, un poquito de aceite y sal.',
'https://spoonwithme.files.wordpress.com/2012/09/pan-con-tomate1.jpg', [
new Ingrediente('Pan', 1),
new Ingrediente('Tomate', 1)
])
];
constructor() { }
getRecetas() {
return this.recetas;
}
getReceta(posicion: number) {
return this.recetas[posicion];
}
eliminarReceta(receta: Receta) {
this.recetas.splice(this.recetas.indexOf(receta), 1);
}
editarReceta(recetaVieja: Receta, recetaNueva: Receta) {
this.recetas[this.recetas.indexOf(recetaVieja)] = recetaNueva;
}
anadirReceta(receta: Receta) {
this.recetas.push(receta);
}
}
