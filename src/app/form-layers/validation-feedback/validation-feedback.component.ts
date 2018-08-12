import {Component, Input, OnInit, Optional} from '@angular/core';
import {AbstractControl, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'chatter-validation-feedback',
  templateUrl: './validation-feedback.component.html',
  styleUrls: ['./validation-feedback.component.scss']
})
export class ValidationFeedbackComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() controlName: string;
  @Input() class: string;

  constructor(
    @Optional() private formGroup: FormGroupDirective
  ) {
    console.log(formGroup);
  }

  ngOnInit() {
    if (!this.control && this.formGroup && this.controlName) {
      this.control = this.formGroup.form.get(this.controlName);
    } else {
      throw new Error('Validation feedback must have [control] or [controlName] input');
    }
  }

}
