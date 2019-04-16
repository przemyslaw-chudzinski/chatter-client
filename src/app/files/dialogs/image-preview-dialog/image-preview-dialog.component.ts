import {Component, Inject} from '@angular/core';
import {CHATTER_DIALOG_DATA} from '../../../ui/dialog';
import {IFile} from '../../models/file.model';
import {DialogRef} from '../../../ui/dialog/dialog-ref';

@Component({
  selector: 'chatter-image-preview-dialog',
  templateUrl: './image-preview-dialog.component.html',
  styleUrls: ['./image-preview-dialog.component.scss']
})
export class ImagePreviewDialogComponent {

  loading = true;

  constructor(
    @Inject(CHATTER_DIALOG_DATA) public file: IFile,
    public dialogRef: DialogRef
  ) { }

}
