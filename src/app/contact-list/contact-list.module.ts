import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactListComponent} from './contact-list.component';
import {ContactComponent} from './contact/contact.component';
import {ContactListService} from './contact-list.service';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatBadgeModule,
    RouterModule
  ],
  declarations: [ContactListComponent, ContactComponent],
  exports: [ContactListComponent, ContactComponent],
  providers: [ContactListService]
})
export class ContactListModule { }
