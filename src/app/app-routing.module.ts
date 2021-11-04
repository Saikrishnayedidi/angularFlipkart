import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocardComponent } from './components/addtocard/addtocard.component';
import { HomeComponent } from './components/home/home.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [{path:'',component:NavbarComponent,children:[{
  path:'home',component:HomeComponent
},{
  path:"mobile",component:MobilesComponent
},{path:"cart",component:AddtocardComponent}] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
