import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IChannel} from '../../../channels/models/channel.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'chatter-edit-channel-name-form',
  templateUrl: './edit-channel-name-form.component.html',
  styleUrls: ['./edit-channel-name-form.component.scss']
})
export class EditChannelNameFormComponent implements OnInit, OnDestroy {

  @Input() set channel (channel: IChannel) {
    this.channel$.next(channel);
  };
  form: FormGroup = null;

  private channel$ = new BehaviorSubject<IChannel>(null);
  private alive = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.channel$.pipe(
      takeWhile(() => this.alive),
      tap(channel => (this.form = this.fb.group({
        name: [channel.name, [Validators.required]]
      })))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  onSaveHandler(): void {
    console.log(this.form.value);
    //TODO: Save changes
  }
}
