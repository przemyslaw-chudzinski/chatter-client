import {animate, state, style, transition, trigger} from '@angular/animations';

export const DROPDOWN_ANIMATION_TIMING = '120ms cubic-bezier(0, 0, 0.2, 1)';

export enum DropdownAnimationStates {
  void = 'void',
  enter = 'enter'
}

export type DROPDOWN_ANIMATION_STATE = 'void' | 'enter';

export const transformMenu = trigger('transformMenu', [
  state(DropdownAnimationStates.void, style({
    opacity: 0,
    transform: 'scale(0.8)',
  })),
  state(DropdownAnimationStates.enter, style({
    opacity: 1,
    transform: 'scale(1)'
  })),
  transition('* <=> *', animate(DROPDOWN_ANIMATION_TIMING))
]);
