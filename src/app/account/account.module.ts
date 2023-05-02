import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedmaterialModule } from '../shared/material.shared';
import { AccountRoutingModule } from './account-routing.module';


@NgModule({

  imports: [
    CommonModule,
    SharedmaterialModule,
    AccountRoutingModule

  ]
})
export class AccountModule { }
