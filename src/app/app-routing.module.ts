import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { LinkListComponent } from './link-list/link-list.component';
import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './card/card.component';
import { SrartComponent } from './srart/srart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:SrartComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'add-link',
        component:AddLinkComponent
      },
      {
        path:'link-list',
        component:LinkListComponent
      },
      {
        path:'charts',
        component:ChartComponent
      },
    ]
  },
  {
    path:'start',
    component:SrartComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'card',
    component:CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
