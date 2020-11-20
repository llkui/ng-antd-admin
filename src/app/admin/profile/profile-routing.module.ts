import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicProfileComponent } from './basic.component';
import { AdvancedProfileComponent } from './advanced.component';

const routes: Routes = [
    {
        path: 'basic',
        component: BasicProfileComponent,
        data: { title: '基础详情页' }
    },
    {
        path: 'advanced',
        component: AdvancedProfileComponent,
        data: { title: '高级详情页' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule {

}
