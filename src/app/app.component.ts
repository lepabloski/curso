import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public vector: number[] = [1, 2, 3, 4];


  ngOnInit(): void {
    // inicial
    console.log('inicial');
    console.log(this.vector);

    // vamos a llenar el vector con unos (1)
    _.fill(this.vector, 1);

    // rellenado
    console.log('rellenado');
    console.log(this.vector);
  }

}
