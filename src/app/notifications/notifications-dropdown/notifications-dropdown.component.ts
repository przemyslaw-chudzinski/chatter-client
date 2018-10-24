import {Component, ElementRef, EventEmitter, HostListener, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {CdkPortalOutlet, ComponentPortal} from '@angular/cdk/portal';
import {NotificationsDropdownContentComponent} from './notifications-dropdown-content/notifications-dropdown-content.component';
import {DROPDOWN_ANIMATION_STATE, DropdownAnimationStates, transformMenu} from '../../dropdown-core/dropdown-animations';
import {ChatterState} from '../../chatter-store/chatter-store.state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectNotificationsNumber} from '../notifications-store/notifications-store.selectors';
import {CdkConnectedOverlay, Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';

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
  // @ViewChild(CdkConnectedOverlay, {read: OverlayRef}) _overlayRef: OverlayRef;

  @Output() afterClosed = new EventEmitter<void>();
  @Output() afterOpened = new EventEmitter<void>();

  dropdownAnimationState: DROPDOWN_ANIMATION_STATE = DropdownAnimationStates.void;

  notificatonsNumber$: Observable<number> = this._store.pipe(select(selectNotificationsNumber));

  get isOpen(): boolean {
    return this._isOpen;
  }

  constructor(
    private _store: Store<ChatterState>,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef
  ) {}

  open(): void {
    this._isOpen = true;
    this.dropdownAnimationState = DropdownAnimationStates.enter;
    this._portal = new ComponentPortal<NotificationsDropdownContentComponent>(NotificationsDropdownContentComponent);
    // const overlayRef = this._createOverlay();
    this._portal.attach(this._portalOutlet);
    // this._overlayRef.attach(this._portal);
    // overlayRef.attach(this._portal);
    // this._portalOutlet.attach(this._portal);
    // overlayRef.attach(this._portal);
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

  // private _createOverlay(): OverlayRef {
  //   const overlayConfig = new OverlayConfig({
  //     hasBackdrop: true,
  //     backdropClass: 'dropdown-backdrop',
  //     positionStrategy: this._overlay.position().global()
  //   });
  //   return this._overlay.create(overlayConfig);
  // }

}
