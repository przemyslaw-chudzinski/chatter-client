import {Component, Input} from '@angular/core';
import {IUser} from '../../auth/models/user.model';

@Component({
  selector: 'chatter-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {
  @Input() user: IUser;
}
