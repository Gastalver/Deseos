import { Component, OnInit} from '@angular/core';
import { Lista, ListaItem} from "../../app/clases";
import { NavController } from "ionic-angular";
import { AlertController} from "ionic-angular";

/* Servicios */
import { ListaDeseosService} from "../../app/servicios/lista-deseos.service";


@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

  public nombreLista:string;
  public nombreItem:string;
  public items: ListaItem[];

  constructor(
    private _listaDeseosService: ListaDeseosService,
    private _navController: NavController,
    private _alertController: AlertController
  ) {
    this.items = [];
  }

  ngOnInit() {
    console.log('Componente Agregar cargado.')
  }

  agregarItem(){
    if (!this.nombreItem){
      this.alerta('Opss','El nombre de item no puede estar vacío.','Entendido');
      return;
    }
    let item = new ListaItem();
    item.name = this.nombreItem;
    this.items.push(item);
    console.log(this.items);
    this.nombreItem="";
  }

  eliminarItem(i:number){
    this.items.splice(i,1);
  }

  guardarLista(){
    if (!this.nombreLista){
      this.alerta('Vaya...','El nombre de lista no puede estar vacío', 'Ok');
      return;
    } else {
      let listaNueva = new Lista(this.nombreLista);
      listaNueva.items = this.items;
      // this._listaDeseosService.listas.push(listaNueva);
      this._listaDeseosService.agregarLista(listaNueva);
      console.log(this._listaDeseosService.getListas());
      this._navController.pop();
    }
  }



  alerta(titulo:string, subtitulo: string, nombreBoton: string){
  let alerta = this._alertController.create({
    title: titulo,
    subTitle: subtitulo,
    buttons: [nombreBoton]
  });
  alerta.present();
}



}
