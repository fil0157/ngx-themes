// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { DocsComponent } from './docs.component';
import { DocsRoutingModule } from './docs-routing.module';
import { HeaderModule } from 'src/app/components/layout/header/header.module';
import { FooterModule } from 'src/app/components/layout/footer/footer.module';
import { SidebarModule } from 'src/app/components/layout/sidebar/sidebar.module';



@NgModule({
  declarations: [
    DocsComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    DocsRoutingModule,
  ],
  exports: [
    DocsComponent,
  ],
})
export class DocsModule { }
