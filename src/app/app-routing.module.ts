// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// App
import { 
  HomeComponent, 
  VersionComponent,
  LicenseComponent,
  DocsComponent,
  DemoComponent,
} from './pages';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'version',
    component: VersionComponent,
  },
  {
    path: 'license',
    component: LicenseComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
  //     { path: '', component: HomeComponent },
      { path: '**', redirectTo: '/docs', pathMatch: 'full' }
    ]
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
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
