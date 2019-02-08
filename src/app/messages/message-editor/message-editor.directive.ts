import {Directive, HostListener, ElementRef, Input, OnInit, Renderer2, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {takeWhile, tap} from 'rxjs/operators';

@Directive({
  selector: '[chatterMessageEditor]'
})
export class MessageEditorDirective implements OnInit, OnDestroy {
  private _disabled$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _alive = true;

  @Input() set disabled(_disabled: boolean) {
    this._disabled$.next(_disabled);
  }

  constructor(
    private _elemRef: ElementRef,
    private _renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this._disabled$.asObservable()
      .pipe(
        takeWhile(() => this._alive),
        tap(disabled => disabled && this._makeDisabled()),
        tap(disabled => !disabled && this._makeEnable())
      ).subscribe();
  }

  ngOnDestroy(): void {
    this._alive = false;
  }

  @HostListener('keydown.enter', ['$event'])
  keydownEnterHandler(event: KeyboardEvent): void {
    event.preventDefault();
    this._elemRef.nativeElement.innerHTML = '';
  }

  private _makeEnable(): void {
    this._renderer.setAttribute(this._elemRef.nativeElement, 'contenteditable', 'true');
    this._elemRef.nativeElement.focus();
  }

  private _makeDisabled(): void {
    this._renderer.removeAttribute(this._elemRef.nativeElement, 'contenteditable');
  }
}
