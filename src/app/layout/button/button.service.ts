import { Injectable } from '@angular/core';
import { buttonTypes } from './models/button-types';

@Injectable()
export class ButtonService {
  constructor() {}

  get buttonTypes() {
    return buttonTypes;
  }
}
