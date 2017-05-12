import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "../../skeleton/dashboard/dashboard.component";


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [

            {
                path: '',
                loadChildren: '../home/home.module#HomeModule'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class MainRoutingModule { }