import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { SharedmaterialModule } from 'src/app/shared/material.shared';

export const route: Route[] = [
  {
    path: '', component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedmaterialModule,
  ]
})
export class DashboardModule { }
