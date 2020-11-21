import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ExceptionRoutingModule } from './exception-routing.module';

import { NoAccessComponent } from './403.component';
import { NotFoundComponent } from './404.component';
import { ErrorComponent } from './500.component';

@NgModule({
    declarations: [
        NoAccessComponent,
        NotFoundComponent,
        ErrorComponent
    ],
    exports: [
        NoAccessComponent,
        NotFoundComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        NzResultModule,
        NzButtonModule,
        ExceptionRoutingModule
    ]
})

export class ExceptionModule {

}
