import {ListaItem} from "./lista-item";

export class Lista{
  name:string;
  terminada:Boolean;
  items:ListaItem[];
  constructor(nombre:string){
    this.name=nombre;
    this.terminada=false;
  }
}
