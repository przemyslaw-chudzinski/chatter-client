import {OverlayRef} from '@angular/cdk/overlay';
import {EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

export class DialogRef {

  private onAfterClosed = new EventEmitter<void>();
  private onBeforeClose = new EventEmitter<void>();

  constructor(
    private overlayRef: OverlayRef
  ) {}

  get overlay(): OverlayRef {
    return this.overlayRef;
  }

  close(): void {
    this.onBeforeClose.emit();
    this.overlayRef.dispose();
    this.onAfterClosed.emit();
  }

  afterClosed(): Observable<void> {
    return this.onAfterClosed.asObservable();
  }

  beforeClose(): Observable<void> {
    return this.onBeforeClose.asObservable();
  }

}
