import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardAnalysisComponent } from './analysis.component';

const dashboardRoutes: Routes = [
    {
        path: 'analysis',
        component: DashboardAnalysisComponent,
        data: { title: '分析页' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {

}
