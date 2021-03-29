// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Libs
import { AngularColorfulModule } from 'angular-colorful';

// Environment
import { environment } from '../environments/environment';

// App
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { DemoComponent } from './pages/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PopupColorPickerComponent } from 'src/app/components/popup-color-picker/popup-color-picker.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    BrowserModule,
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
