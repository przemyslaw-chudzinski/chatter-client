import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subject} from 'rxjs';
import {takeWhile, tap} from 'rxjs/operators';

@Directive({
  selector: '[chatterLoaderBtn]'
})
export class LoaderBtnDirective implements OnInit, OnDestroy{
  private _initialContent: string;
  private _loadingState$ = new Subject<boolean>();
  private _alive = true;
  @Input() loadingContent = 'Loading...';
  @Input() set loadingState(state: boolean) {
    this._loadingState$.next(state);
  }

  constructor(
    private _elemRef: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this._initialContent = this._elemRef.nativeElement.innerText;
    this
      ._loadingState$
      .pipe(
        takeWhile(() => this._alive),
        tap(this._assignValue.bind(this))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._alive = false;
  }

  private _innerText(txt: string): void {
    this._renderer.setProperty(this._elemRef.nativeElement, 'innerText', txt);
  }

  private _assignValue(state: boolean): void {
    state ? this._innerText(this.loadingContent) : this._innerText(this._initialContent);
  }
}
