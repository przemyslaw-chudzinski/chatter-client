import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatterHttpClient } from './chatter-http-client';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class ChatterHttpModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChatterHttpModule,
      providers: [ChatterHttpClient]
    };
  }
}
