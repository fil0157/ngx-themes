// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/components/layout/header/header.module';
import { FooterModule } from 'src/app/components/layout/footer/footer.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
