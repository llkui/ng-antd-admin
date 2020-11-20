import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';
import { SearchArticlesComponent } from './articles.component';
import { SearchProjectsComponent } from './projects.component';
import { SearchApplicationsComponent } from './applications.component';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent,
        children: [
            {
                path: '',
                redirectTo: 'articles'
            },
            {
                path: 'articles',
                component: SearchArticlesComponent,
                data: { title: '搜索列表（文章）' }
            },
            {
                path: 'projects',
                component: SearchProjectsComponent,
                data: { title: '搜索列表（项目）' }
            },
            {
                path: 'applications',
                component: SearchApplicationsComponent,
                data: { title: '搜索列表（应用）' }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SearchRoutingModule {

}
