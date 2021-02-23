import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { MigrationRoutingModule } from './migration-routing.module';

import { MigrationV10Component } from './migration-v10.component';

@NgModule({
    declarations: [
        MigrationV10Component
    ],
    exports: [
        MigrationV10Component
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
        NzCardModule,
        NzTypographyModule,
        MigrationRoutingModule
    ]
})

export class MigrationModule {

}
