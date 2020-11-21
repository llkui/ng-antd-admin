import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessResultComponent } from './success.component';
import { FailResultComponent } from './fail.component';

const routes: Routes = [
    {
        path: 'success',
        component: SuccessResultComponent,
        data: { title: '成功页' }
    },
    {
        path: 'fail',
        component: FailResultComponent,
        data: { title: '失败页' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ResultRoutingModule {

}
