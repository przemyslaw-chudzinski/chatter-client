import {Component, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'chatter-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent {
  @ViewChild('content', {read: ViewContainerRef}) contentContainer: ViewContainerRef;
}
