import { Component, OnInit } from '@angular/core';
import { OBJETO } from '../mocks/vector';
import { Objeto } from '../mocks/objeto';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public vector: Objeto[] = OBJETO;
  buscarForm: FormGroup;
  encontrado: Boolean = false;
  objs: Objeto;

  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.buildForm();
  }



  buscar() {
    const banda = this.buscarForm.get('buscarBanda').value;
    if ( banda !== '') {
      // verificamos que no este vacio
      if (_.find(this.vector, function(o) { return o.nombre === banda; }) !== undefined) {
        // retorno el objeto que sea exactamente el nombre ingresado.
        this.objs = _.find(this.vector, function(o) { return o.nombre === banda; });
      } else {
        alert('escriba el nombre de una banda');
      }
    } else {
      alert('escriba el nombre de una banda');
    }
  }

  ordenar() {
    // Ordenar ascendentemente.
    this.vector = _.orderBy(this.vector, o => o.nombre);
  }


  buildForm(): void {
    this.buscarForm = this.fb.group({
      buscarBanda: ['']
    });
  }

}
