import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelPagesComponent } from './channel-pages.component';
import {RouterModule, Routes} from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';
import {routerLinks} from '../../routes/router-links';
import { DetailsChannelPageComponent } from './details-channel-page/details-channel-page.component';
import {FormLayersModule} from '../../form-layers/form-layers.module';
import {OnlyChannelAuthorGuard} from '../../channels/guards/only-channel-author.guard';

const routes: Routes = [
  {
    path: '',
    component: ChannelPagesComponent,
    children: [
      {
        path: ':id',
        component: ChatPageComponent
      },
      {
        path: ':id/details',
        component: DetailsChannelPageComponent,
        canActivate: [OnlyChannelAuthorGuard]
      },
      {
        path: '',
        redirectTo: '/' + routerLinks.dashboardPage,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormLayersModule
  ],
  declarations: [ChannelPagesComponent, ChatPageComponent, DetailsChannelPageComponent]
})
export class ChannelPagesModule { }
