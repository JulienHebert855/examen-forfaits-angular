import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'moncton'
})
export class MonctonPipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.destination == "Moncton");
  }

}
