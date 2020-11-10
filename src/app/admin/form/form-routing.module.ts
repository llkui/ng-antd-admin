import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basic-form.component';

const route: Routes = [
    {
        path: 'basic-form',
        component: BasicFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class FormRoutingModule {

}
