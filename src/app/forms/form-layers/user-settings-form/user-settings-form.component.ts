import { Component, OnInit } from '@angular/core';
import {UserSettingsFormService} from './user-settings-form.service';
import {FormLayersBase} from '../form-layers-base';

@Component({
  selector: 'chatter-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent extends FormLayersBase implements OnInit {

  constructor(private userSettingsFormService: UserSettingsFormService) {
    super();
  }

  ngOnInit() {
    this.formGroup = this.userSettingsFormService.init();
  }

}
