import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{

    path: '', children: [

        { path: '', loadChildren: () => import('src/app/account/signin/signin.module').then(m => m.SigninModule) },

    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
