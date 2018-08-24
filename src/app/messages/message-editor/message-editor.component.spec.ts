import {MessageEditorComponent} from './message-editor.component';
import {tap} from 'rxjs/operators';

describe('MessageEditorComponent', () => {
  let component;
  beforeEach(() => {
    component = new MessageEditorComponent(null);
  });

  it('should have keyDownEnterHandler method', () => {
    expect(typeof component.keyDownEnterHandler !== 'undefined').toBeTruthy();
  });

  it('should have keyUpHandler method', () => {
    expect(typeof component.keyUpHandler !== 'undefined').toBeTruthy();
  });

  describe('keyUpHandler method', () => {

    it('should update content$ stream when the button is different than Enter', () => {
      let _result = null;
      component.content$.pipe(
        tap(e => (_result = e))
      ).subscribe();
      component.keyUpHandler({code: 'KEYCODE', target: {innerHTML: 'message content'}});
      expect(_result).toBe('message content');
    });

    it('should not update content$ stream when the button is equal Enter', () => {
      let _result = null;
      component.content$.pipe(
        tap(e => (_result = e))
      ).subscribe();
      component.keyUpHandler({code: 'Enter', target: {innerHTML: 'message content'}});
      expect(_result).not.toBe('message content');
    });

    it('should set _content property on empty string', () => {
      // component['_content'] = 'message content';
      // component.keyDownEnterHandler();
      // expect(component['_content'] ).toEqual('');
    });

  });

  it('should have getter value method', () => {

  });

  describe('getter value', () => {
    it('should return string', () => {
      component.value = 'sample string';
      expect(component.value).toBe('sample string');
    });
  });

  it('should have setter value method', () => {

  });

  describe('setter value method', () => {
    it('should set _value property and update a stream content$', () => {
      let _value = null;
      component.content$.pipe(
        tap(v => (_value = v))
      ).subscribe();
      component.value = 'message';
      expect(component.value).toEqual('message');
      expect(_value).toEqual('message');
    });
  });

  it('should have contentChanges property', () => {
    expect(typeof component.contentChanges !== 'undefined').toBeTruthy();
  });

  it('should  have messageReady property', () => {
    expect(typeof component.messageReady !== 'undefined').toBeTruthy();
  });

  it('should emit messages as a string when messageReady is emitting', () => {
    let event = null;
    component.messageReady.pipe(
      tap(e => (event = e))
    ).subscribe();

    component.messageReady.emit({
      content: 'message content',
      author: null
    });

    expect(event).toEqual({
      content: 'message content',
      author: null
    });

  });

  it('should have ngOnInit method', () => {
    expect(typeof component.ngOnInit !== 'undefined').toBeTruthy();
  });

  describe('ngOnInit method', () => {

    beforeEach(() => {
      component.ngOnInit();
    });

    it('should set _content property', () => {
      component.content$.next('message');
      expect(component['_content']).toEqual('message');
    });

    it('should emit contentChanges event', () => {
      let _res = null;
      component.contentChanges.pipe(
        tap(v => (_res = v))
      ).subscribe();
      component.ngOnInit();
      component.content$.next('message');
      expect(_res).toBe('message');
    });

  });

  it('should have ngOnDestroy method', () => {
    expect(typeof component.ngOnDestroy !== 'undefined').toBeTruthy();
  });

  it('should have _alive property set on true', () => {
    expect(typeof component['_alive'] !== 'undefined').toBeTruthy();
    expect(component['_alive']).toBeTruthy();
  });

  describe('ngOnDestroy', () => {
    it('should set _alive property on false', () => {
      component.ngOnDestroy();
      expect(component['_alive']).toBeFalsy();
    });
  });

});
