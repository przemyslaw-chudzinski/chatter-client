import {Component, Input} from '@angular/core';
import {IFile} from '../../files/models/file.model';

@Component({
  selector: 'chatter-message-attached-files',
  templateUrl: './message-attached-files.component.html',
  styleUrls: ['./message-attached-files.component.scss']
})
export class MessageAttachedFilesComponent {
  @Input() files: IFile[];
}
