import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {INoAccessDialogData} from '../../models/no-access-dialog-data.model';

@Component({
  selector: 'chatter-no-access-dialog',
  templateUrl: './no-access-dialog.component.html',
  styleUrls: ['./no-access-dialog.component.scss']
})
export class NoAccessDialogComponent {
  defaultReason = 'Sorry! You don\'t have access to this resource';
  constructor(@Inject(MAT_DIALOG_DATA) public data: INoAccessDialogData) { }
}
