import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzResultModule } from 'ng-zorro-antd/result';

import { UserRoutingModule } from './user-routing.module';

import { UserLoginComponent } from './login.component';
import { UserRegisterComponent } from './register.component';
import { UserRegisterResultComponent } from './register-result.component';

@NgModule({
    declarations: [
        UserLoginComponent,
        UserRegisterComponent,
        UserRegisterResultComponent
    ],
    exports: [
        UserLoginComponent,
        UserRegisterComponent,
        UserRegisterResultComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzDropDownModule,
        NzTabsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzCheckboxModule,
        NzIconModule,
        NzAlertModule,
        NzSelectModule,
        NzPopoverModule,
        NzProgressModule,
        NzResultModule,
        UserRoutingModule
    ]
})

export class UserModule {

}
