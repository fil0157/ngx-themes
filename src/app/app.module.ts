// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesFactory } from './factories';

// Project
import { NgxThemesModule } from '@fil0157/ngx-themes';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxThemesModule.forRoot(ThemesFactory),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
