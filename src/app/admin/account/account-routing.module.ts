import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenterAccountComponent } from './center.component';

const routes: Routes = [
    {
        path: 'center',
        component: CenterAccountComponent,
        data: { title: '个人中心' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountRoutingModule {

}
