import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../auth/models/user.model';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Subscription } from '../../../../../node_modules/rxjs';
import { tap } from '../../../../../node_modules/rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: IUser;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
