import { Injectable } from '@angular/core';
import { Receta } from './receta';
import { Ingrediente } from '../shared/ingrediente';
@Injectable()
export class RecetaService {
private recetas: Array<Receta> = [
new Receta('Sandwich de Aguacate y Queso Fundido', 'Pon a calentar la tostadora para paninis a temperatura mediano-bajo. Si no tienes la tostadora, puedes usar un sartén. Si optas por hacerlo en el sartén, rocíalo con un poco de aerosol antiadherente.Úntale mantequilla al pan, añádele el queso y el aguacate y tuéstalo por 3 ó 4 minutos o hasta derretir el queso.','http://images-gmi-pmc.edge-generalmills.com/82aeb542-d21a-42b1-940f-f04b7909ca7f.jpg', [
new Ingrediente('Rebanadas de pan', 4),
new Ingrediente('Aguacate maduro cortado en rodajas finas', 1),
new Ingrediente('Rebanadas de queso mozzarella fresco', 6)
]),
new Receta('Espagueti al Ajo con Salsa Marinara', 'Cuece el espagueti de acuerdo a las instrucciones del paquete. Escurre y reserva.En una cacerola, calienta el aceite a fuego medio alto. Agrega los dientes de ajo y cocínalos, sin dejar de mover, hasta que se pongan dorados. Agrega el espagueti y revuelve bien hasta que todo el aceite y los ajos han cubierto cada hilo de pasta.Agrega la salsa marinara y revuelve hasta que todo se integre muy bien.Divide la pasta en cuatro platos, agrega queso parmesano al gusto y sirve inmediatamente.',
'http://images-gmi-pmc.edge-generalmills.com/b194a6a7-da60-4ad4-bc86-6e697db2fcf2.jpg', [
new Ingrediente('Paquete (8ozs) de espagueti', 1),
new Ingrediente('Cucharadas soperas de aceite de oliva', 2),
new Ingrediente('Dientes de ajo picados finamente',3),
new Ingrediente('Tazas de salsa marinara',2)
]),
new Receta('Mariquitas Cubanas', 'Calienta 2 tazas de aceite en una sartén. Pela los plátanos y córtalos en rodajas finas. Fríelas de a tandas, para no reducir la temperatura del aceite, hasta que se tornen doradas. Retíralas del fuego y espolvoréalas con sal a gusto. Sírvelas frías o calientes. También las puedes acompañar con mojo. Las mariquitas se pueden guardar en una bolsa plástica por una semana.', 'http://images-gmi-pmc.edge-generalmills.com/1c3704b1-f2e9-455b-afc6-805dffc5adc0.jpg', [
new Ingrediente('Plátanos verdes', 2),
new Ingrediente('Tazas de aceite vegetal', 2),
new Ingrediente('Sal', 1)
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
