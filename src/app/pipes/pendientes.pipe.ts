import { Pipe, PipeTransform } from '@angular/core';
import { Lista, ListaItem} from "../clases";

@Pipe({
  name: 'pendientes',
  pure: false
})

export class PendientesPipe implements PipeTransform {
  transform( listas: Lista[], estado:boolean = true ) :Lista[] {

    let nuevaLista: Lista[] = [];

    for (let lista of listas){
      if (lista.terminada == estado){
        nuevaLista.push(lista);
  }
  }

    return nuevaLista ;
  }
}
