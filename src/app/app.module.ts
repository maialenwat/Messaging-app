import { TemplatesModule } from './templates/templates.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './templates/content/content.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NavigationComponent } from './templates/navigation/navigation.component';
import { NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    TemplatesModule,
    NbThemeModule.forRoot()
  ],
  providers: [],
  bootstrap: [ContentComponent,HeaderComponent,FooterComponent,NavigationComponent]
})
export class AppModule { }
