import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../receta';
@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.css']
})
export class RecetaItemComponent implements OnInit {

  @Input() receta: Receta;

  constructor() { }

  ngOnInit() {
  }

}
