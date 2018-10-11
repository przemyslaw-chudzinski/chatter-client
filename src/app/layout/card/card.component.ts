import {Component, Input} from '@angular/core';

@Component({
  selector: 'chatter-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() loadingState: boolean;
}
