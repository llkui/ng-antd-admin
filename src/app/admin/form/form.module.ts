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
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzListModule } from 'ng-zorro-antd/list';

import { WatermarkModule } from '../../componens/watermark/watermark.module';

import { FormRoutingModule } from './form-routing.module';

import { BasicFormComponent } from './basic-form.component';
import { StepFormComponent } from './step-form.component';
import { AdvancedFormComponent } from './advanced-form.component';

@NgModule({
    declarations: [
        BasicFormComponent,
        StepFormComponent,
        AdvancedFormComponent
    ],
    exports: [
        BasicFormComponent,
        StepFormComponent,
        AdvancedFormComponent
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
        NzTimePickerModule,
        NzTableModule,
        NzPopconfirmModule,
        NzAffixModule,
        NzPopoverModule,
        NzListModule,
        WatermarkModule,
        FormRoutingModule
    ]
})

export class FromModule {

}
