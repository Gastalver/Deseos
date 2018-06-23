import {Injectable} from '@angular/core';
import{Lista, ListaItem} from "../clases";

@Injectable()
export class ListaDeseosService {

  public listas:Lista[] = [];

  constructor() {
    console.log('Servicio inicializado');
    // let lista1 = new Lista('Compras de supermercado');
    // let lista2= new Lista('Posibles Apps');
    // let lista3= new Lista('Prestaciones PI')
    //
    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);
    this.cargarData();
  }

  getListas(){
    return this.listas
  }

  actualizarData(){
    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  cargarData() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  agregarLista(lista: Lista){
    this.listas.push(lista);
    this.actualizarData();

  }

  eliminarLista(index:number){
    this.listas.splice(index,1);
    this.actualizarData();
  }

}
