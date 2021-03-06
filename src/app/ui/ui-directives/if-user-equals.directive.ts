import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {take, tap} from 'rxjs/operators';
import {IUser} from '../../auth/models/user.model';

@Directive({
  selector: '[chatterIfUserEquals]'
})
export class IfUserEqualsDirective implements OnInit {

  @Input('chatterIfUserEquals') valueToCompare: string;
  @Input('chatterIfUserEqualsCompareWith') compareWith: string = '_id';
  @Input('chatterIfUserEqualsElse') otherTemplate: TemplateRef<any> = null;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _auth: AuthService,
    private _containerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this._auth.user$
      .pipe(
        take(1),
        tap(user => this.compare(user))
      ).subscribe();
  }

  private compare(user: IUser) {
    this.valueToCompare === user[this.compareWith].toString() ? this._containerRef.createEmbeddedView(this._templateRef) : this.renderElse();
  }

  private renderElse() {
    this.otherTemplate && this.otherTemplate instanceof TemplateRef &&  this._containerRef.createEmbeddedView(this.otherTemplate);
  }
}
