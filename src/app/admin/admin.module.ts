import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedmaterialModule } from '../shared/material.shared';
import { RouterModule } from '@angular/router';
import { Adminroutes } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  exports: [AdminComponent],
  imports: [
    CommonModule,
    SharedmaterialModule,
    RouterModule.forChild(Adminroutes),
  ]
})
export class AdminModule { }





