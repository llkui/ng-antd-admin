import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { WatermarkModule } from '../../../componens/watermark/watermark.module';

import { SearchService } from './search.service';

import { SearchRoutingModule } from './search-routing.module';

import { SearchComponent } from './search.component';
import { SearchArticlesComponent } from './articles.component';
import { SearchProjectsComponent } from './projects.component';
import { SearchApplicationsComponent } from './applications.component';

@NgModule({
    declarations: [
        SearchComponent,
        SearchArticlesComponent,
        SearchProjectsComponent,
        SearchApplicationsComponent
    ],
    exports: [
        SearchComponent,
        SearchArticlesComponent,
        SearchProjectsComponent,
        SearchApplicationsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NzPageHeaderModule,
        NzBreadCrumbModule,
        NzInputModule,
        NzButtonModule,
        NzTabsModule,
        NzCardModule,
        NzTagModule,
        NzGridModule,
        NzSelectModule,
        NzFormModule,
        NzIconModule,
        NzAvatarModule,
        NzToolTipModule,
        NzListModule,
        NzDropDownModule,
        WatermarkModule,
        SearchRoutingModule
    ],
    providers: [
        SearchService
    ]
})

export class SearchModule {

}
