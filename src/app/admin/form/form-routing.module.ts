import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basic-form.component';
import { StepFormComponent } from './step-form.component';
import { AdvancedFormComponent } from './advanced-form.component';

const routes: Routes = [
    {
        path: 'basic-form',
        component: BasicFormComponent,
        data: { title: '基础表单' }
    },
    {
        path: 'step-form',
        component: StepFormComponent,
        data: { title: '分步表单' }
    },
    {
        path: 'advanced-form',
        component: AdvancedFormComponent,
        data: { title: '高级表单' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormRoutingModule {

}
