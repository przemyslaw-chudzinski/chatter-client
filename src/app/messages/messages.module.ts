import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesService } from './messages.service';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class MessagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessagesModule,
      providers: [MessagesService]
    };
  }
}
