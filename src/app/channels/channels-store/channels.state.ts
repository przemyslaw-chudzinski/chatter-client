import {ChatterState} from '../../chatter-store/chatter-store.state';
import {IChannel} from '../models/channel.model';

export class ChannelsState extends ChatterState {
  channels: IChannel[] = null;
}
