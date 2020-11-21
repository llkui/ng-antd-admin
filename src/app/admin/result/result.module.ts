import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ResultRoutingModule } from './result-routing.module';

import { SuccessResultComponent } from './success.component';
import { FailResultComponent } from './fail.component';

@NgModule({
    declarations: [
        SuccessResultComponent,
        FailResultComponent
    ],
    exports: [
        SuccessResultComponent,
        FailResultComponent
    ],
    imports: [
        CommonModule,
        NzCardModule,
        NzResultModule,
        NzButtonModule,
        NzDescriptionsModule,
        NzStepsModule,
        NzIconModule,
        ResultRoutingModule
    ]
})

export class ResultModule {

}
