import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFile} from '../models/file.model';

@Component({
  selector: 'chatter-file-preview-dialog-topbar',
  templateUrl: './file-preview-dialog-topbar.component.html',
  styleUrls: ['./file-preview-dialog-topbar.component.scss']
})
export class FilePreviewDialogTopbarComponent {

  @Input() file: IFile = null;

  @Output() onClose = new EventEmitter<void>();
}
