// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Libs
import { AngularColorfulModule } from 'angular-colorful';

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
import { PopupColorPickerComponent } from 'src/app/components/popup-color-picker/popup-color-picker.component';

// Modules
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



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
    PopupColorPickerComponent,
  ],
  imports: [
    CoreModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AngularColorfulModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
