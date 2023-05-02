
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { Route, RouterModule } from '@angular/router';
import { SharedmaterialModule } from 'src/app/shared/material.shared';

export const route: Route[] = [
  {
    path: '', component: SigninComponent
  }
]

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedmaterialModule
  ]
})
export class SigninModule { }
