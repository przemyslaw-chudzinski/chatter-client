import {ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef} from '@angular/core';
import {DialogRef} from './dialog-ref';
import {IDialogConfig} from './models/dialog-config.model';
import {ComponentType, Overlay, OverlayConfig, OverlayRef, PositionStrategy, ScrollStrategy} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {DialogContainerComponent} from './dialog-container/dialog-container.component';
import {tap} from 'rxjs/internal/operators/tap';
import {take} from 'rxjs/operators';
import {CHATTER_DIALOG_DATA} from './index';

const DIALOG_OVERLAY_DEFAULT_CONFIG: OverlayConfig = {
  backdropClass: 'chatter-dialog-backdrop',
  hasBackdrop: true,
  panelClass: 'chatter-dialog-container'
};

const DIALOG_DEFAULT_USER_CONFIG: IDialogConfig<any> = {data: null};

@Injectable()
export class DialogService {

  private config: IDialogConfig = null;
  private componentPortal: ComponentPortal<DialogContainerComponent>;
  private overlayRef: OverlayRef = null;
  private contentComponentOrTemplateRef: ComponentType<any> | TemplateRef<any> = null;

  constructor(
    private overlay: Overlay,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  open<T, K = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config: IDialogConfig<K> = DIALOG_DEFAULT_USER_CONFIG): DialogRef {
    this.config = config;
    this.contentComponentOrTemplateRef = componentOrTemplateRef;
    this.overlayRef = this.createOverlay();
    const dialogRef = new DialogRef(this.overlayRef);
    const injector = this.createInjector(dialogRef);
    this.componentPortal = new ComponentPortal<DialogContainerComponent>(DialogContainerComponent, null, injector);
    this.attachPortal();
    this.assignSubscribers(dialogRef);
    return dialogRef;
  }

  private createOverlay(): OverlayRef {
    return this.overlay.create(this.getOverlayConfig());
  }

  private getOverlayConfig(): OverlayConfig {

    const positionStrategy: PositionStrategy = this.overlay.position()
      .global()
      .centerVertically()
      .centerHorizontally();

    const scrollStrategy: ScrollStrategy = this.overlay.scrollStrategies.block();
    const config = {...DIALOG_OVERLAY_DEFAULT_CONFIG, ...this.config} as OverlayConfig;

    config.positionStrategy = positionStrategy;
    config.scrollStrategy = scrollStrategy;

    return config;
  }

  private attachPortal(): ComponentRef<DialogContainerComponent> {
    const containerComponentRef = this.overlayRef ? this.overlayRef.attach(this.componentPortal) : null;
    this.attachContentComponent(containerComponentRef);
    return containerComponentRef;
  }

  private attachContentComponent(containerRef: ComponentRef<DialogContainerComponent>): void {
    if (containerRef && this.contentComponentOrTemplateRef) {
      if (this.contentComponentOrTemplateRef instanceof TemplateRef) containerRef.instance.contentContainer.createEmbeddedView(this.contentComponentOrTemplateRef);
      else {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.contentComponentOrTemplateRef);
        containerRef.instance.contentContainer.createComponent(componentFactory);
      }
    }
  }

  private assignSubscribers(dialogRef: DialogRef): void {
    this.overlayRef.backdropClick().pipe(
      take(1),
      tap(() => dialogRef.close())
    ).subscribe();
  }

  private createInjector(dialogRef: DialogRef): PortalInjector {
    const injectionTokens = new WeakMap();
    injectionTokens.set(CHATTER_DIALOG_DATA, this.config.data);
    injectionTokens.set(DialogRef, dialogRef);
    return new PortalInjector(this.injector, injectionTokens);
  }

}
