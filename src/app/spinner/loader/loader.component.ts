import {Component, Input} from '@angular/core';

@Component({
  selector: 'chatter-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() message: string;
  @Input() class: string;
}
