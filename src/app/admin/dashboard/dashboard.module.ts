import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';

import { WatermarkModule } from '../../componens/watermark/watermark.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { AnalysisDashboardComponent } from './analysis.component';
import { MonitorDashboardComponent } from './monitor.component';
import { WorkplaceDashboardComponent } from './workplace.component';

@NgModule({
    declarations: [
        AnalysisDashboardComponent,
        MonitorDashboardComponent,
        WorkplaceDashboardComponent
    ],
    exports: [
        AnalysisDashboardComponent,
        MonitorDashboardComponent,
        WorkplaceDashboardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NzGridModule,
        NzCardModule,
        NzSkeletonModule,
        NzTabsModule,
        NzDatePickerModule,
        NzDividerModule,
        NzIconModule,
        NzToolTipModule,
        NzProgressModule,
        NzDropDownModule,
        NzButtonModule,
        NzRadioModule,
        NzTableModule,
        NzBadgeModule,
        NzPageHeaderModule,
        NzBreadCrumbModule,
        NzStatisticModule,
        NzAvatarModule,
        NzListModule,
        WatermarkModule,
        DashboardRoutingModule
    ]
})

export class DashboardModule {

}
