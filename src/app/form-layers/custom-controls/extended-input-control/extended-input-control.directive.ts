import {Directive, OnInit} from '@angular/core';
import {MatInput} from '@angular/material';

@Directive({
  selector: '[chatterExtendedInputControl]'
})
export class ExtendedInputControlDirective extends MatInput implements OnInit {

  ngOnInit(): void {
    this.focus();
  }

  focus(): void {
    super.focus();
  }

}
