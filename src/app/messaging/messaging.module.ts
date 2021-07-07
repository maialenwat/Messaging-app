import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';


@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [InboxComponent]
})
export class MessagingModule { }
