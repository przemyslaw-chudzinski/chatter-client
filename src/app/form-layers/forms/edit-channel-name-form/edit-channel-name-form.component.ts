import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IChannel} from '../../../channels/models/channel.model';
import {FormBuilder, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';
import {takeWhile} from 'rxjs/operators';
import {FormLayersAbstract} from '../../form-layers.abstract';
import {ExtendedInputControlComponent} from '../../custom-controls/extended-input-control/extended-input-control.component';

@Component({
  selector: 'chatter-edit-channel-name-form',
  templateUrl: './edit-channel-name-form.component.html',
  styleUrls: ['./edit-channel-name-form.component.scss']
})
export class EditChannelNameFormComponent extends FormLayersAbstract implements OnInit, OnDestroy {

  @Input() set channel (channel: IChannel) {
    this.channel$.next(channel);
  };

  private channel$ = new BehaviorSubject<IChannel>(null);
  private alive = true;

  @ViewChild(ExtendedInputControlComponent) private extInputControl: ExtendedInputControlComponent = null;

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.channel$.pipe(
      takeWhile(() => this.alive),
      tap(({name}) => (this.formGroup = this.formGroup || this.fb.group({
        name: [name, [Validators.required]]
      }))),
      tap(({name}) => this.formGroup && this.formGroup.get('name').setValue(name))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  close(): void {
    this.extInputControl && this.extInputControl.close();
  }

  open(): void {
    this.extInputControl && this.extInputControl.open();
  }

  showLoader(): void {
    this.extInputControl && this.extInputControl.showLoader();
  }

  hideLoader(): void {
    this.extInputControl && this.extInputControl.hideLoader();
  }

  updateInitValue(channel: IChannel): void {
    this.channel$.next(channel);
  }

}
