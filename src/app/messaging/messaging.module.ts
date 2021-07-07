import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';
import { InboxComponent } from './inbox/inbox.component';


@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [InboxComponent]
})
export class MessagingModule { }
