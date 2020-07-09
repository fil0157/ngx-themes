// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// App
import { HomeComponent } from './pages';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  initialNavigation: 'enabled',
  scrollPositionRestoration: 'enabled',
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
