import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatterHttpClient } from './chatter-http-client';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/token.interceptor';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class ChatterHttpModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChatterHttpModule,
      providers: [
        ChatterHttpClient,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }
      ]
    };
  }
}
