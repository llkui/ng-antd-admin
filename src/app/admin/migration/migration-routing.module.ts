import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MigrationV10Component } from './migration-v10.component';
import { MigrationV11Component } from './migration-v11.component';
import { MigrationV12Component } from './migration-v12.component';

const routes: Routes = [
    {
        path: 'v10',
        component: MigrationV10Component,
        data: { title: 'v10 升级指南' }
    },
    {
        path: 'v11',
        component: MigrationV11Component,
        data: { title: 'v11 升级指南' }
    },
    {
        path: 'v12',
        component: MigrationV12Component,
        data: { title: 'v12 升级指南' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MigrationRoutingModule {

}
