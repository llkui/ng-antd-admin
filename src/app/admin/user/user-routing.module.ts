import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './login.component';
import { UserRegisterComponent } from './register.component';
import { UserRegisterResultComponent } from './register-result.component';

const routes: Routes = [
    {
        path: 'login',
        component: UserLoginComponent,
        data: { title: '登录' }
    },
    {
        path: 'register',
        component: UserRegisterComponent,
        data: { title: '注册' }
    },
    {
        path: 'register-result',
        component: UserRegisterResultComponent,
        data: { title: '注册结果' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {

}
