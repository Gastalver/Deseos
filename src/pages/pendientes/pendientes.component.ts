import {Component, OnInit} from '@angular/core';
import {ListaDeseosService} from "../../app/servicios/lista-deseos.service";
import {List} from "ionic-angular";
import { NavController } from "ionic-angular"; // Equivalente al Router

/* Modelos */
import { Lista, ListaItem} from "../../app/clases";

/* Componentes */
import { AgregarComponent } from "../agregar/agregar.component";
import { DetalleComponent } from "../detalle/detalle.component";

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
  public listas: Lista[];
  constructor(
    private _listaDeseos: ListaDeseosService,
    private _navController: NavController
  ) {
  }

  ngOnInit() {
    this.listas = this._listaDeseos.getListas();
    console.log('Componente pendientes cargado');
    console.log(this.listas)
  }
  irAgregar(){
    this._navController.push(AgregarComponent)
  }

  verDetalle(lista,index){
    this._navController.push(DetalleComponent, { lista, index });
  }
}
