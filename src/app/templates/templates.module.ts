import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InboxComponent } from '../messaging/inbox/inbox.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ContentComponent,
    InboxComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NbCardModule,
    NbIconModule
  ],
})
export class TemplatesModule { }
