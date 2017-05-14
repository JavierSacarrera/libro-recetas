import { Ingrediente } from '../shared/ingrediente';
export class ListaCompraService {
private ingredientes: Array<Ingrediente> = [];
constructor() { }
getItems() {
return this.ingredientes;
}
anadirIngredientes(items: Array<Ingrediente>) {
Array.prototype.push.apply(this.ingredientes, items);
}
anadirIngrediente(ingrediente: Ingrediente) {
this.ingredientes.push(ingrediente);
}
editarIngrediente(ingredienteViejo: Ingrediente, ingredienteNuevo: Ingrediente) {
this.ingredientes[this.ingredientes.indexOf(ingredienteViejo)] = ingredienteNuevo;
}
eliminarIngrediente(ingrediente: Ingrediente) {
this.ingredientes.splice(this.ingredientes.indexOf(ingrediente), 1);
}
}