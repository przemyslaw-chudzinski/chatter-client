import { Component, OnInit } from '@angular/core';
import {IUser} from '../../../auth/models/user.model';
import {select, Store} from '@ngrx/store';
import {ChatterState} from '../../../chatter-store/chatter-store.state';
import {Observable} from 'rxjs';
import {selectUsers} from '../../../users/users-store/users.selectors';
import { FormBuilder} from '@angular/forms';
import {FormLayersAbstract} from '../../form-layers.abstract';
import {IAutocompleteData} from '../../models/autocomplete-data.model';

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

  get members(): any {
    return this.formGroup.get('members');
  }

  constructor(
    private _store: Store<ChatterState>,
    private _fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      name: [null, []],
      members: [null, []]
    });
  }

  submit(): void {
    console.log(this.value);
  }

  mapValuesTo(item: IUser): IAutocompleteData {
    return {
      label: `${item.firstName} ${item.lastName}`,
      value: item._id
    };
  }

}
