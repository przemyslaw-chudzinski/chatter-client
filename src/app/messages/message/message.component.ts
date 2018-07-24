import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from '../models/message.model';
import { AuthService } from '../../auth/auth.service';
import { take, tap } from '../../../../node_modules/rxjs/operators';
import { IUser } from '../../auth/models/user.model';
import { MatDialog } from '../../../../node_modules/@angular/material/dialog';
import { EditMessageDialogComponent } from '../dialogs/edit-message-dialog/edit-message-dialog.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: IMessage;
  private currentUser: IUser;
  constructor(private auth: AuthService, private dialog: MatDialog) {}

  ngOnInit() {
    this.auth.user$
      .pipe(
        take(1),
        tap(user => (this.currentUser = user))
      )
      .subscribe();
  }

  showEditForm(): boolean {
    return this.currentUser._id === this.message.author._id;
  }

  editMessage(): void {
    this.dialog.open(EditMessageDialogComponent, {
      minWidth: 600,
      data: {
        message: this.message
      }
    });
  }
}
