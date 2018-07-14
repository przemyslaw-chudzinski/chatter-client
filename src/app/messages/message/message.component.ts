import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from '../models/message.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: IMessage;
  constructor() {}

  ngOnInit() {}
}
