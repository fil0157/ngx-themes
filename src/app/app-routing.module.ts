// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// App
import { HomeComponent } from './pages/home/home.component';
import { DemoComponent } from './pages/demo/demo.component';
import { DocsComponent } from './pages/docs/docs.component';
import { LicenseComponent } from './pages/license/license.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'license',
    component: LicenseComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },
  {
    path: 'docs/:doc',
    component: DocsComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
  //     { path: '', component: MainComponent },
      { path: '**', redirectTo: '/demo', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];



const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  initialNavigation: 'enabled',
  scrollPositionRestoration: 'enabled',
  relativeLinkResolution: 'legacy'
};



@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
