import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenterAccountComponent } from './center.component';
import { SettingsAccountComponent } from './settings.component';

const routes: Routes = [
    {
        path: 'center',
        component: CenterAccountComponent,
        data: { title: '个人中心' }
    },
    {
        path: 'settings',
        component: SettingsAccountComponent,
        data: { title: '个人设置' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountRoutingModule {

}
