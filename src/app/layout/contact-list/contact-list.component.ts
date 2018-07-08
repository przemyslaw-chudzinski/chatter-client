import {
  Component,
  Input,
  OnDestroy,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { IResponseData } from '../../models/response-data';
import { IUser } from '../../auth/models/user.model';
import { WebsocketService } from '../../websocket/websocket.service';
import { tap, startWith } from '../../../../node_modules/rxjs/operators';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnDestroy, OnChanges {
  @Input() data: IResponseData<IUser>;
  private onMessageSub: Subscription;

  constructor(private websocketService: WebsocketService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      if (!this.onMessageSub) {
        this.websocketService.onMessage$
          .pipe(
            startWith(null),
            tap(data => {
              if (data && data.action === 'CONTACT_STATUS_CHANGED') {
                if (this.data && this.data.results) {
                  const dataToUpdate = { ...this.data };
                  dataToUpdate.results = dataToUpdate.results.map(item => {
                    data.visibleContactsIds.includes(item._id)
                      ? (item.available = true)
                      : (item.available = false);
                    return item;
                  });
                  this.data = dataToUpdate;
                }
              }
            })
          )
          .subscribe();
      }
    }
  }

  ngOnDestroy() {
    this.onMessageSub.unsubscribe();
  }
}
