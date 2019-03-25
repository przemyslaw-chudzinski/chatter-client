import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewContainerRef} from '@angular/core';
import {HorizontalConnectionPos, Overlay, OverlayConfig, OverlayRef, PositionStrategy, VerticalConnectionPos} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {take, tap} from 'rxjs/operators';

@Directive({
  selector: '[chatterDropdownTriggerFor]'
})
export class DropdownTriggerForDirective {

  @Input() context: any = null;
  @Input('chatterDropdownTriggerFor') tplRef: any;

  @Input() originX: HorizontalConnectionPos = 'start';
  @Input() originY: VerticalConnectionPos = 'bottom';
  @Input() overlayX: HorizontalConnectionPos = 'start';
  @Input() overlayY: VerticalConnectionPos = 'top';

  @Output() closed = new EventEmitter<any>();
  @Output() opened = new EventEmitter<any>();

  private overlayRef: OverlayRef = null;

  constructor(
    private containerRef: ViewContainerRef,
    private overlay: Overlay,
    private elemRef: ElementRef
  ) { }

  @HostListener('click', ['$event'])
  private open(): void {
    this.render();
    this.handleBackdropClick();
  }

  private render(): void {
    const overlayConfig = this.getOverlayConfig();
    this.overlayRef = this.overlay.create(overlayConfig);
    const ctx: IDropdownTemplateContext = {destroy: this.destroy.bind(this), ...this.context};
    const portal = new TemplatePortal(this.tplRef, this.containerRef, ctx);
    this.overlayRef.attach<any>(portal);
    this.opened.emit();
  }

  private destroy(): void {
    this.overlayRef && this.overlayRef.dispose();
    this.closed.emit();
  }

  private getPositionStrategy(): PositionStrategy {
    return this.overlay.position()
      .flexibleConnectedTo(this.elemRef)
      .withPositions([
        {
          originX: this.originX,
          originY: this.originY,
          overlayX: this.overlayX,
          overlayY: this.overlayY,
        }
      ]);
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.getPositionStrategy();
    return new OverlayConfig({
      backdropClass: 'dropdown-backdrop',
      panelClass: 'dropdown-panel',
      hasBackdrop: true,
      positionStrategy
    });
  }

  private handleBackdropClick(): void {
    this.overlayRef && this.overlayRef.backdropClick()
      .pipe(
        take(1),
        tap(() => this.destroy())
      ).subscribe();
  }

}
