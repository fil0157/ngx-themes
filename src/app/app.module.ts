// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesConfig } from './config';
import { 
  HomeComponent, 
  VersionComponent,
  LicenseComponent,
} from './pages';

// Project
import { NgxThemesModule } from '@fil0157/ngx-themes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VersionComponent,
    LicenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxThemesModule.forRoot(ThemesConfig),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
