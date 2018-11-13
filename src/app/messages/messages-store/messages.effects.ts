import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {MessagesApiService} from '../messages-api.service';
import {LoadMessagesSuccessAction, LoadMoreMessagesSuccessAction, messagesActionTypes} from './messages.actions';
import {map, switchMap, tap} from 'rxjs/operators';
import {ContactListService} from '../../contact-list/contact-list.service';

@Injectable()
export class MessagesEffects {
  @Effect()
  loadMessages$: Observable<Action> = this.actions$.pipe(
    ofType(messagesActionTypes.LoadMessages),
    map((action: any) => action.payload as string),
    switchMap(recipientId => this.messagesService.getMessages(recipientId).pipe(
      tap(() => this.contactListService.resetUnreadMessages.emit(recipientId)),
      map(response => response.data)
    )),
    map(messages => new LoadMessagesSuccessAction(messages))
  );

  @Effect()
  loadMoreMessages$: Observable<Action> = this.actions$.pipe(
    ofType(messagesActionTypes.LoadMoreMessages),
    map((action: any) => {
      action.recipientId as string;
      action.take as number;
      action.skip as number;
      return action;
    }),
    switchMap(action => this.messagesService.getMessages(action.recipientId, action.skip, action.take).pipe(
      tap(() => this.contactListService.resetUnreadMessages.emit(action.recipientId)),
      map(response => response.data)
    )),
    map(messages => new LoadMoreMessagesSuccessAction(messages))
  );

  constructor(
    private actions$: Actions,
    private messagesService: MessagesApiService,
    private contactListService: ContactListService
  ) {}
}
