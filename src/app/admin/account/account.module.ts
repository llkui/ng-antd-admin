import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

import { AccountRoutingModule } from './account-routing.module';

import { CenterAccountComponent } from './center.component';
import { SettingsAccountComponent } from './settings.component';

@NgModule({
    declarations: [
        CenterAccountComponent,
        SettingsAccountComponent
    ],
    exports: [
        CenterAccountComponent,
        SettingsAccountComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
        NzFormModule,
        NzSelectModule,
        NzButtonModule,
        NzUploadModule,
        NzSwitchModule,
        AccountRoutingModule
    ]
})

export class AccountModule {

}
