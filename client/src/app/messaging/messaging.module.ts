import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    InboxComponent,
    CreateMessageComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    InboxComponent,
    CreateMessageComponent,
    NotificationComponent
  ]
})
export class MessagingModule { }
