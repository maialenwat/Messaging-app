import { InboxComponent } from './messaging/inbox/inbox.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMessageComponent } from './messaging/create-message/create-message.component';

const routes: Routes = [
  { path: 'messages', component: InboxComponent},
  { path: 'create-message', component: CreateMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
