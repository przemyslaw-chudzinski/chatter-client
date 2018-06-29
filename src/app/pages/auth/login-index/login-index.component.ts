import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chatter-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {
  showLoginForm = true;

  constructor() {}

  ngOnInit() {}

  toggleForms(): void {
    this.showLoginForm = !this.showLoginForm;
  }
}
