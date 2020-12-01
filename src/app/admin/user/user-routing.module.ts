import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './login.component';

const routes: Routes = [
    {
        path: 'login',
        component: UserLoginComponent,
        data: { title: 'login' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {

}
