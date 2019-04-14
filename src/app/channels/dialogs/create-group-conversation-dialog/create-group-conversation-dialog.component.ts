import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CreateGroupConversationFormComponent} from '../../../form-layers/forms/create-group-conversation-form/create-group-conversation-form.component';
import {Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {LoadChannelsAction} from '../../channels-store/channels.actions';
import {AlertsService} from '../../../notifications/alerts.service';

@Component({
  selector: 'chatter-create-group-conversation-dialog',
  templateUrl: './create-group-conversation-dialog.component.html',
  styleUrls: ['./create-group-conversation-dialog.component.scss']
})
export class CreateGroupConversationDialogComponent {
  loading: boolean;
  @ViewChild(CreateGroupConversationFormComponent) form: CreateGroupConversationFormComponent;

  constructor(
    public dialogRef: MatDialogRef<CreateGroupConversationDialogComponent>,
    private _store: Store<ChatterState>,
    private _notificationsService: AlertsService
  ) { }

  submittedHandler(event): void {
    // todo handle errors and more
    this.dialogRef.close();
    this._store.dispatch(new LoadChannelsAction());
    this._notificationsService.open(event.message, 'Got it');
  }

  submit(): void {
    this.form.submit();
    this.loading = true;
  }

}
