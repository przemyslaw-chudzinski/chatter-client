import { Pipe, PipeTransform } from '@angular/core';
import {IChannelMember} from '../models/channel-member.model';

@Pipe({
  name: 'onlyConfirmed'
})
export class OnlyConfirmedPipe implements PipeTransform {

  transform(value: IChannelMember[], args?: any): IChannelMember[] | null {
    return value.filter(item => item.confirmed);
  }

}
