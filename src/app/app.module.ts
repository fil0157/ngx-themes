// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

// Modules
import { CoreModule } from './core/core.module';



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
    CoreModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
