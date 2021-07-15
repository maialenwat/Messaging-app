import { MessagingModule } from './../messaging/messaging.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ContentComponent

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MessagingModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ContentComponent
  ],
})
export class TemplatesModule { }
