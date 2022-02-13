import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WinesComponent} from "./wines/wines.component";
import {ContactComponent} from "./contact/contact.component";
import {WineDetailComponent} from "./wine-detail/wine-detail.component";
import {NewWineComponent} from "./new-wine/new-wine.component";
import {LoginComponent} from "./login/login.component";

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
},{
  path:'vino/:wineId',
  component:WineDetailComponent,
  pathMatch:'full'
},{
  path:'contacto',
  component:ContactComponent,
  pathMatch:'full'
},{
  path:'crearvino',
  component:NewWineComponent,
  pathMatch:'full'
},{
  path:'login',
  component:LoginComponent,
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
