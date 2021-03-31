// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App
import { DocsComponent } from './docs.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DocsComponent,
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
