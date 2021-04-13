import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { WatermarkModule } from '../../componens/watermark/watermark.module';

import { ListRoutingModule } from './list-routing.module';

import { TableListComponent } from './table-list.component';
import { BasicListComponent } from './basic-list.component';
import { CardListComponent } from './card-list.component';

@NgModule({
    declarations: [
        TableListComponent,
        BasicListComponent,
        CardListComponent
    ],
    exports: [
        TableListComponent,
        BasicListComponent,
        CardListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
        NzPageHeaderModule,
        NzBreadCrumbModule,
        NzCardModule,
        NzGridModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzDatePickerModule,
        NzIconModule,
        NzButtonModule,
        NzToolTipModule,
        NzTableModule,
        NzDividerModule,
        NzBadgeModule,
        NzPaginationModule,
        NzDropDownModule,
        NzPopoverModule,
        NzCheckboxModule,
        NzListModule,
        NzModalModule,
        NzMessageModule,
        NzStepsModule,
        NzRadioModule,
        NzAlertModule,
        NzAffixModule,
        NzDrawerModule,
        NzDescriptionsModule,
        NzProgressModule,
        NzResultModule,
        NzAvatarModule,
        NzSpinModule,
        WatermarkModule,
        ListRoutingModule
    ]
})

export class ListModule {

}
