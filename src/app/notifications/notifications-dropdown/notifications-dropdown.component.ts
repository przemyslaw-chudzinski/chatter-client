import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {CdkPortalOutlet, ComponentPortal} from '@angular/cdk/portal';
import {NotificationsDropdownContentComponent} from './notifications-dropdown-content/notifications-dropdown-content.component';
import {DROPDOWN_ANIMATION_STATE, DropdownAnimationStates, transformMenu} from '../../dropdown-core/dropdown-animations';

@Component({
  selector: 'chatter-notifications-dropdown',
  templateUrl: './notifications-dropdown.component.html',
  styleUrls: ['./notifications-dropdown.component.scss'],
  animations: [
    transformMenu
  ]
})
export class NotificationsDropdownComponent {
  private _isOpen = false;
  private _portal: ComponentPortal<NotificationsDropdownContentComponent>;
  @ViewChild('trigger') _trigger: ElementRef;
  @ViewChild(CdkPortalOutlet) private _portalOutlet;

  @Output() afterClosed = new EventEmitter<void>();
  @Output() afterOpened = new EventEmitter<void>();

  dropdownAnimationState: DROPDOWN_ANIMATION_STATE = DropdownAnimationStates.void;

  get isOpen(): boolean {
    return this._isOpen;
  }

  open(): void {
    this._isOpen = true;
    this.dropdownAnimationState = DropdownAnimationStates.enter;
    this._portal = new ComponentPortal<NotificationsDropdownContentComponent>(NotificationsDropdownContentComponent);
    this._portal.attach(this._portalOutlet);
  }

  close(): void {
    this._isOpen = false;
    this.dropdownAnimationState = DropdownAnimationStates.void;
  }

  handleClosingDone(event): void {
    if (event.toState === DropdownAnimationStates.void) {
      this._portalOutlet.detach();
      this.afterClosed.emit();
    } else {
      this.afterOpened.emit();
    }
  }

}
