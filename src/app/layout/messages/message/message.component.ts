import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../auth/models/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: string;
  @Input() author: IUser;
  constructor() {}

  ngOnInit() {}
}
