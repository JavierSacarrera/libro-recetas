import { Component } from '@angular/core';
import { RecetaService } from './recetas/receta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecetaService]
})
export class AppComponent {
  title = 'app works!';
}
