import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { WebsocketService } from '../websocket/websocket.service';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class WebsocketModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WebsocketModule,
      providers: [WebsocketService]
    };
  }
}
