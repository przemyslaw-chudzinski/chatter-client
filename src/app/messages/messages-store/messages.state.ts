import {ChatterState} from '../../chatter-store/chatter-store.state';
import {IMessage} from '../models/message.model';

export class MessagesState extends ChatterState {
  messages: IMessage[] = null;
}
