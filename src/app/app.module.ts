import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { routerLinks } from './routes/router-links';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth/auth.service';
import { ChatterHttpModule } from './chatter-http/chatter-http.module';
import { UsersModule } from './users/users.module';
import { WebsocketModule } from './websocket/websocket.module';
import { MessagesModule } from './messages/messages.module';
import { UserNotLoggedGuard } from './auth/guards/user-not-logged.guard';
import {ChatterStoreModule} from './chatter-store/chatter-store.module';
import {ChatterFormLayersModule} from './chatter-forms/chatter-form-layers/chatter-form-layers.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: routerLinks.dashboardPage,
    pathMatch: 'full'
  },
  {
    path: routerLinks.dashboardPage,
    loadChildren:
      'src/app/pages/dashboard-pages/dashboard-pages.module#DashboardPagesModule',
    canActivate: [AuthGuard]
  },
  {
    path: routerLinks.messagesPage,
    loadChildren:
      'src/app/pages/message-pages/message-pages.module#MessagePagesModule',
    canActivate: [AuthGuard]
  },
  {
    path: routerLinks.loginPage,
    loadChildren: 'src/app/pages/auth-pages/auth-pages.module#AuthPagesModule',
    canActivate: [UserNotLoggedGuard]
  },
  {
    path: routerLinks.accountPages.userAccount,
    loadChildren: 'src/app/pages/account-pages/account-pages.module#AccountPagesModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot(),
    ChatterFormLayersModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: AuthService.token
      }
    }),
    ChatterHttpModule.forRoot(),
    UsersModule.forRoot(),
    WebsocketModule.forRoot(),
    MessagesModule.forRoot(),
    ChatterStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
