import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GeneratorComponent } from './dashboard/generator/generator.component';
import { SuportComponent } from './dashboard/suport/suport.component';
import { Error404ComponentComponent } from './dashboard/error404-component/error404-component.component';

const routes: Routes = [
  {
    path: 'home',
    component: GeneratorComponent
  },
  {
    path: 'suport',
    component: SuportComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404ComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
