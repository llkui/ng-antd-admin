import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAccessComponent } from './403.component';
import { NotFoundComponent } from './404.component';
import { ErrorComponent } from './500.component';

const routes: Routes = [
    {
        path: '403',
        component: NoAccessComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '500',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExceptionRoutingModule {

}
