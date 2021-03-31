// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'docs',
    loadChildren: () => import('./pages/docs/docs.module').then(m => m.DocsModule),
  },
  {
    path: 'docs/:doc',
    loadChildren: () => import('./pages/docs/docs.module').then(m => m.DocsModule),
  },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule),
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
