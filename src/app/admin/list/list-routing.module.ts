import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableListComponent } from './table-list.component';
import { BasicListComponent } from './basic-list.component';
import { CardListComponent } from './card-list.component';

const routes: Routes = [
    {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
    },
    {
        path: 'table-list',
        component: TableListComponent,
        data: { title: '查询表格' }
    },
    {
        path: 'basic-list',
        component: BasicListComponent,
        data: { title: '标准列表' }
    },
    {
        path: 'card-list',
        component: CardListComponent,
        data: { title: '卡片列表' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ListRoutingModule {

}
