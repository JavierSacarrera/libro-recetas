import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';
import { RecetaInfoComponent } from './recetas/receta-info/receta-info.component';
import { EditarRecetaComponent } from './recetas/editar-receta/editar-receta.component';
import { RecetaItemComponent } from './recetas/lista-recetas/receta-item.component';
import { AnadirListaCompraComponent } from './lista-compra/anadir-lista-compra.component';
import { ListaCompraService } from './lista-compra/lista-compra.service';
import { InfoRecetaComponent } from './recetas/info-receta/info-receta.component';
import { routing } from './app.routing';
import { InicioRecetaComponent } from './recetas/inicio-receta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    ListaCompraComponent,
    ListaRecetasComponent,
    EditarRecetaComponent,
    RecetaInfoComponent,
    RecetaItemComponent,
    AnadirListaCompraComponent,
    InfoRecetaComponent,
    InicioRecetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ListaCompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
