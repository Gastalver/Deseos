import {Component, OnInit} from '@angular/core';
import {ListaDeseosService} from "../../app/servicios/lista-deseos.service";
import {List} from "ionic-angular";
import { NavController } from "ionic-angular"; // Equivalente al Router

/* Modelos */
import { Lista} from "../../app/clases/listas";
import { ListaItem} from "../../app/clases/lista-item";

/* Componentes */
import {AgregarComponent} from "../agregar/agregar.component";

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
    this.listas = this._listaDeseos.getListas();
  }

  ngOnInit() {
    console.log('Componente pendientes cargado');
    console.log(this.listas)
  }
  irAgregar(){
    this._navController.push(AgregarComponent)
  }
}
