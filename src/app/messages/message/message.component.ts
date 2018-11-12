import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IMessage} from '../models/message.model';
import {AuthService} from '../../auth/auth.service';
import {take, tap} from 'rxjs/operators';
import {IUser} from '../../auth/models/user.model';
import {MatDialog} from '@angular/material/dialog';
import {EditMessageDialogComponent} from '../dialogs/edit-message-dialog/edit-message-dialog.component';

@Component({
  selector: 'chatter-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  private _currentUser: IUser;
  @Input() message: IMessage;

  constructor(private _auth: AuthService, private _dialog: MatDialog) {}

  ngOnInit() {
    this._auth.user$
      .pipe(
        take(1),
        tap(user => (this._currentUser = user))
      )
      .subscribe();
  }

  showEditForm(): boolean {
    return this._currentUser._id === this.message.author._id;
  }

  editMessage(): void {
    this._dialog.open(EditMessageDialogComponent, {
      minWidth: 600,
      data: this.message
    });
  }
}
