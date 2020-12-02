import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './login.component';
import { UserRegisterComponent } from './register.component';
import { UserRegisterResultComponent } from './register-result.component';

const routes: Routes = [
    {
        path: 'login',
        component: UserLoginComponent,
        data: { title: 'login' }
    },
    {
        path: 'register',
        component: UserRegisterComponent,
        data: { title: 'register' }
    },
    {
        path: 'register-result',
        component: UserRegisterResultComponent,
        data: { title: 'register-result' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {

}
