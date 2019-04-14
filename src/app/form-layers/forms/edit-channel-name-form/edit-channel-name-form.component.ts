import {Component, Input, OnInit} from '@angular/core';
import {IChannel} from '../../../channels/models/channel.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'chatter-edit-channel-name-form',
  templateUrl: './edit-channel-name-form.component.html',
  styleUrls: ['./edit-channel-name-form.component.scss']
})
export class EditChannelNameFormComponent implements OnInit {

  @Input() channel: IChannel = null;
  form: FormGroup = null;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.channel.name, [Validators.required]]
    });
  }

  onSaveHandler(channelName: string): void {
    console.log(this.form.value);
  }

  submit(): void {

  }

}
