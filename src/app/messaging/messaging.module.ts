import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InboxComponent,
    CreateMessageComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [InboxComponent, CreateMessageComponent]
})
export class MessagingModule { }
