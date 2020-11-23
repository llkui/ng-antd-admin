import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { AccountRoutingModule } from './account-routing.module';

import { CenterAccountComponent } from './center.component';

@NgModule({
    declarations: [
        CenterAccountComponent
    ],
    exports: [
        CenterAccountComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NzGridModule,
        NzCardModule,
        NzIconModule,
        NzDividerModule,
        NzTagModule,
        NzInputModule,
        NzAvatarModule,
        NzTabsModule,
        NzListModule,
        NzDropDownModule,
        NzToolTipModule,
        NzSkeletonModule,
        AccountRoutingModule
    ]
})

export class AccountModule {

}
