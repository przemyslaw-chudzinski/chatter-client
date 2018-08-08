import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {MessagesApiService} from '../messages-api.service';
import {LoadMessagesSuccessAction, messagesActionTypes, UpdateMessageSuccessAction} from './messages.actions';
import {map, switchMap, tap} from 'rxjs/operators';
import {ContactListService} from '../../contact-list/contact-list.service';
import {IMessage} from '../models/message.model';

@Injectable()
export class MessagesEffects {
  @Effect()
  loadMessages$: Observable<Action> = this.actions$.pipe(
    ofType(messagesActionTypes.LoadMessages),
    map((action: any) => action.payload as string),
    switchMap(recipientId => this.messagesService.getMessages(recipientId).pipe(
      tap(() => this.contactListService.resetUnreadMessages.emit(recipientId)),
      map(response => response.results)
    )),
    map(messages => new LoadMessagesSuccessAction(messages))
  );

  @Effect()
  updateMessage$: Observable<Action> = this.actions$.pipe(
    ofType(messagesActionTypes.UpdateMessage),
    map((action: any) => action.payload as IMessage),
    switchMap(message => this.messagesService.updateMessage(message).pipe(
      map(response => response.data)
    )),
    map(updatedMessage => new UpdateMessageSuccessAction(updatedMessage))
  );

  constructor(
    private actions$: Actions,
    private messagesService: MessagesApiService,
    private contactListService: ContactListService
  ) {}
}
