import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

import { AuthGuard } from './../service/auth-guard.service';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
    declarations: [
        AdminComponent,
        HomeComponent,
        ChangelogComponent
    ],
    exports: [
        AdminComponent,
        HomeComponent,
        ChangelogComponent
    ],
    imports: [
        CommonModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzCardModule,
        NzTimelineModule,
        AdminRoutingModule
    ],
    providers: [
        AuthGuard
    ]
})

export class AdminModule {

}
