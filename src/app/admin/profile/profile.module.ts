import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { WatermarkModule } from '../../componens/watermark/watermark.module';

import { ProfileRoutingModule } from './profile-routing.module';

import { BasicProfileComponent } from './basic.component';
import { AdvancedProfileComponent } from './advanced.component';

@NgModule({
    declarations: [
        BasicProfileComponent,
        AdvancedProfileComponent
    ],
    exports: [
        BasicProfileComponent,
        AdvancedProfileComponent
    ],
    imports: [
        CommonModule,
        NzPageHeaderModule,
        NzBreadCrumbModule,
        NzDescriptionsModule,
        NzCardModule,
        NzDividerModule,
        NzTableModule,
        NzBadgeModule,
        NzButtonModule,
        NzRadioModule,
        NzIconModule,
        NzDropDownModule,
        NzStatisticModule,
        NzTabsModule,
        NzStepsModule,
        NzPopoverModule,
        NzToolTipModule,
        NzEmptyModule,
        WatermarkModule,
        ProfileRoutingModule
    ]
})

export class ProfileModule {

}
