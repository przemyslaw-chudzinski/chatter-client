import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ContactListService {
  resetUnreadMessages = new EventEmitter<string>();

  constructor() { }
}
