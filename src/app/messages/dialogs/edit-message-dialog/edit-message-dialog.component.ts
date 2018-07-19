import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '../../../../../node_modules/@angular/material/dialog';
import { IMessage } from '../../models/message.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-edit-message-dialog',
  templateUrl: './edit-message-dialog.component.html',
  styleUrls: ['./edit-message-dialog.component.scss']
})
export class EditMessageDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EditMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  cancel(): void {
    this.dialogRef.close();
  }

  update(): void {}
}
