import {Component, OnInit} from '@angular/core';
import { NavController, NavParams} from "ionic-angular";
import { AlertController} from "ionic-angular";
import { Lista, ListaItem} from "../../app/clases";
import { ListaDeseosService} from "../../app/servicios/lista-deseos.service";

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

  public index: number;
  public lista: any;
  public nombreItem: string;

  constructor(
    public _navController: NavController,
    public _navParams: NavParams,
    public _listaDeseosService: ListaDeseosService,
    public _alertController: AlertController
  ) {
    this.index = this._navParams.get("index");
    this.lista = this._navParams.get("lista");
  }

  ngOnInit() {
  }

  actualizar(item:ListaItem){
    item.completado = !item.completado;

    let todosMarcados = true;
    for (let item of this.lista.items){
      if (!item.completado){
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseosService.actualizarData();
  }

  eliminarItem(i){
    this.lista.items.splice(i,1);
    return;
  }

  agregarItem(){
    let nuevoItem = new ListaItem();
    nuevoItem.name = this.nombreItem;
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this._listaDeseosService.actualizarData();
  }


  eliminarLista(){
    const confirm = this._alertController.create({
      title: '¿Está seguro?',
      message: 'Una vez eliminada la lista no se podrá recuperar.',
      buttons: ['Cancelar',
        {
          text: 'Sí',
          handler: () => {
            this._listaDeseosService.eliminarLista(this.index);
            this._navController.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
