import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WinesComponent} from "./wines/wines.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [{
  path:'inicio',
  component:HomeComponent,
  pathMatch:'full'
},{
  path:'listavinos',
  component:WinesComponent,
  pathMatch:'full'
},{
  path:'listavinos/:name',
  component:WinesComponent,
  pathMatch:'full'
},
  {
  path:'contacto',
  component:ContactComponent,
  pathMatch:'full'
},{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'inicio'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
