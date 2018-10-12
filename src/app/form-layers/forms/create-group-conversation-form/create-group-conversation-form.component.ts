import { Component, OnInit } from '@angular/core';
import {IUser} from '../../../auth/models/user.model';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Observable, of} from 'rxjs';
import {selectUsers} from '../../../users/users-store/users.selectors';
import {FormBuilder, Validators} from '@angular/forms';
import {FormLayersAbstract} from '../../form-layers.abstract';
import {IAutocompleteData} from '../../models/autocomplete-data.model';
import {ChannelsApiService} from '../../../channels/channels-api.service';
import {catchError, take, tap} from 'rxjs/operators';

@Component({
  selector: 'chatter-create-group-conversation-form',
  templateUrl: './create-group-conversation-form.component.html',
  styleUrls: ['./create-group-conversation-form.component.scss'],
  exportAs: 'create-group-conversation-form'
})
export class CreateGroupConversationFormComponent extends FormLayersAbstract implements OnInit {

  users$: Observable<IUser[]> = this._store.pipe(
    select(selectUsers)
  );

  constructor(
    private _store: Store<ChatterState>,
    private _fb: FormBuilder,
    private _channelsApiService: ChannelsApiService
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      memberIds: [null, [Validators.required]]
    });
  }

  submit(): void {
    this.isValid && this._channelsApiService.saveChannel(this.value)
      .pipe(
        take(1),
        tap(x => console.log(x)),
        tap(res => this.submitted.emit(res)),
        catchError(err => {
          this.submitted.emit(err);
          return of(err);
        })
      )
      .subscribe();
  }

  mapValuesTo(item: IUser): IAutocompleteData {
    return {
      label: `${item.firstName} ${item.lastName}`,
      value: item._id
    };
  }

}
