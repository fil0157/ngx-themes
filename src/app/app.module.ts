// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxThemesConfig } from './config';
import {
  HomeComponent,
  VersionComponent,
  LicenseComponent,
  DocsComponent,
  DemoComponent,
} from './pages';
import {
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
} from './components';

// Project
import { NgxThemesModule } from '@fil0157/ngx-themes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VersionComponent,
    LicenseComponent,
    DocsComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxThemesModule.forRoot(NgxThemesConfig),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
