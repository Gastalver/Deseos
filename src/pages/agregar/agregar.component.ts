import {Component, OnInit} from '@angular/core';
import {Lista,ListaItem} from "../../app/clases";

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

  public nombreLista:string;
  public nombreItem:string;

  public items: ListaItem[];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    console.log('Componente Agregar cargado.')
  }

  agregarItem(){
    if (this.nombreItem.length == 0 ){
      return;
    }
    let item = new ListaItem();
    item.name = this.nombreItem;
    this.items.push(item);
    console.log(this.items)
    this.nombreItem="";
  }
  eliminarItem(i:number){
    this.items.splice(i,1);
}

}
