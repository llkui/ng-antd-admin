import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableListComponent } from './table-list.component';

const routes: Routes = [
    {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
    },
    {
        path: 'table-list',
        component: TableListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ListRoutingModule {

}
