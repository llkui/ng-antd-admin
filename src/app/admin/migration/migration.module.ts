import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { MigrationRoutingModule } from './migration-routing.module';

import { MigrationV10Component } from './migration-v10.component';
import { MigrationV11Component } from './migration-v11.component';
import { MigrationV12Component } from './migration-v12.component';

@NgModule({
    declarations: [
        MigrationV10Component,
        MigrationV11Component,
        MigrationV12Component
    ],
    exports: [
        MigrationV10Component,
        MigrationV11Component,
        MigrationV12Component,
    ],
    imports: [
        CommonModule,
        NzCardModule,
        NzTypographyModule,
        MigrationRoutingModule
    ]
})

export class MigrationModule {

}
