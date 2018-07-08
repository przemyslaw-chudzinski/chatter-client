import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../auth/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { tap, take } from 'rxjs/operators';
import { AuthService } from '../../../auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: IUser;
  show = true; // TODO: Return correctly data from server

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    this.auth.user$
      .pipe(
        take(1),
        tap(
          user => (this.contact._id === user._id ? (this.show = false) : null)
        )
      )
      .subscribe();
  }
}
