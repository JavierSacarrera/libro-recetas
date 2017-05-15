import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { RECETA_ROUTES } from './recetas/recetas.routing';
const APP_ROUTES: Routes = [
{ path: '', redirectTo: '/recetas', pathMatch: 'full' },
{ path: 'recetas', component: RecetasComponent, children: RECETA_ROUTES },
{ path: 'lista-compra', component: ListaCompraComponent }];
export const routing = RouterModule.forRoot(APP_ROUTES);