import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAccessComponent } from './403.component';
import { NotFoundComponent } from './404.component';
import { ErrorComponent } from './500.component';

const routes: Routes = [
    {
        path: '403',
        component: NoAccessComponent,
        data: { title: '403' }
    },
    {
        path: '404',
        component: NotFoundComponent,
        data: { title: '404' }
    },
    {
        path: '500',
        component: ErrorComponent,
        data: { title: '500' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExceptionRoutingModule {

}
