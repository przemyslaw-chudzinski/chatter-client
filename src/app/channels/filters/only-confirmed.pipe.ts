import { Pipe, PipeTransform } from '@angular/core';
import {IMember} from '../models/member.model';

@Pipe({
  name: 'onlyConfirmed'
})
export class OnlyConfirmedPipe implements PipeTransform {

  transform(value: IMember[], args?: any): IMember[] | null {
    return value.filter(item => item.confirmed);
  }

}
