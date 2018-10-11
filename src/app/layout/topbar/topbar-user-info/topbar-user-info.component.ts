import {Component, Input} from '@angular/core';
import {IUser} from '../../../auth/models/user.model';

@Component({
  selector: 'chatter-topbar-user-info',
  templateUrl: './topbar-user-info.component.html',
  styleUrls: ['./topbar-user-info.component.scss']
})
export class TopbarUserInfoComponent {
  @Input() user: IUser;
}
