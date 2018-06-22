import {Injectable} from '@angular/core';
import{Lista} from "../clases/listas";
import{ListaItem} from "../clases/lista-item";

@Injectable()
export class ListaDeseosService {

  public listas:Lista[] = [];

  constructor() {
    console.log('Servicio inicializado');
    let lista1 = new Lista('Compras de supermercado');
    let lista2= new Lista('Posibles Apps');
    let lista3= new Lista('Prestaciones PI')

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

  }

  getListas(){
    return this.listas
  }

}
