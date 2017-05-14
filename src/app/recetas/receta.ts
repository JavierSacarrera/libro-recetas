import { Ingrediente } from '../shared/ingrediente';

export class Receta {
    constructor(public nombre: string, public descripcion: string, public imagenUrl: string, public ingredientes: Array<Ingrediente>){

    }
}