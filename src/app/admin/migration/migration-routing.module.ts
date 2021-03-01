import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MigrationV10Component } from './migration-v10.component';
import { MigrationV11Component } from './migration-v11.component';

const routes: Routes = [
    {
        path: 'v10',
        component: MigrationV10Component
    },
    {
        path: 'v11',
        component: MigrationV11Component
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MigrationRoutingModule {

}
