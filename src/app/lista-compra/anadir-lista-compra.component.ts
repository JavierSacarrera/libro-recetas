import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ListaCompraService } from './lista-compra.service';
import { Ingrediente } from '../shared/ingrediente';
@Component({
  selector: 'app-anadir-lista-compra',
  templateUrl: './anadir-lista-compra.component.html',
  styleUrls: ['./anadir-lista-compra.component.css']
})
export class AnadirListaCompraComponent implements OnChanges {
  @Input() ingrediente: Ingrediente;
  @Output() vaciado = new EventEmitter();
  esNuevo = true;
  constructor(private listaCompraService: ListaCompraService) { }
  ngOnChanges(changes) {
    if (changes.ingrediente.currentValue === null) {
      this.esNuevo = true;
      this.ingrediente = { nombre: null, cantidad: null };
    } else {
      this.esNuevo = false;
    }
  }
  enviarFormulario(ingrediente: Ingrediente) {
    const ingredienteNuevo = new Ingrediente(ingrediente.nombre,
      ingrediente.cantidad);
    if (this.esNuevo) {
      this.ingrediente = ingredienteNuevo;
      this.listaCompraService.anadirIngrediente(this.ingrediente);
    } else {
      this.listaCompraService.editarIngrediente(this.ingrediente, ingredienteNuevo);
      this.limpiar();
    }
  }
  eliminar() {
    this.listaCompraService.eliminarIngrediente(this.ingrediente);
    this.limpiar();
  }
  limpiar() {
    this.esNuevo = true;
    this.vaciado.emit(null);
  }
}