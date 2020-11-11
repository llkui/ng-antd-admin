import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzResultModule } from 'ng-zorro-antd/result';

import { FormRoutingModule } from './form-routing.module';

import { BasicFormComponent } from './basic-form.component';
import { StepFormComponent } from './step-form.component';

@NgModule({
    declarations: [
        BasicFormComponent,
        StepFormComponent
    ],
    exports: [
        BasicFormComponent,
        StepFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzPageHeaderModule,
        NzBreadCrumbModule,
        NzCardModule,
        NzFormModule,
        NzInputModule,
        NzDatePickerModule,
        NzInputNumberModule,
        NzRadioModule,
        NzSelectModule,
        NzButtonModule,
        NzMessageModule,
        NzIconModule,
        NzStepsModule,
        NzDividerModule,
        NzAlertModule,
        NzResultModule,
        FormRoutingModule
    ]
})

export class FromModule {

}
