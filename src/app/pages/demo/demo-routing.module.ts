// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App
import { DemoComponent } from './demo.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DemoComponent,
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
