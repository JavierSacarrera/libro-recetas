import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';
import { RecetaInfoComponent } from './recetas/receta-info/receta-info.component';
import { EditarRecetaComponent } from './recetas/editar-receta/editar-receta.component';
import { RecetaItemComponent } from './recetas/lista-recetas/receta-item.component';
import { AnadirItemComponent } from './lista-compra/anadir-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    ListaCompraComponent,
    ListaRecetasComponent,
    RecetaInfoComponent,
    RecetaItemComponent,
    AnadirItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
