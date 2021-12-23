import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WinesComponent} from "./wines/wines.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},{
  path:'listavinos',
  component:WinesComponent,
  pathMatch:'full'
},{
  path:'contacto',
  component:ContactComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
