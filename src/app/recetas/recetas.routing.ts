import { Routes } from '@angular/router';
import { InicioRecetaComponent } from './inicio-receta.component';
import { InfoRecetaComponent } from './info-receta/info-receta.component';
import { EditarRecetaComponent } from './editar-receta/editar-receta.component';
export const RECETA_ROUTES: Routes = [
    { path: '', component: InicioRecetaComponent },
    { path: 'nueva', component: EditarRecetaComponent },
    { path: ':id', component: InfoRecetaComponent },
    { path: ':id/editar', component: EditarRecetaComponent }
];