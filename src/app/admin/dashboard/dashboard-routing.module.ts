import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalysisDashboardComponent } from './analysis.component';
import { MonitorDashboardComponent } from './monitor.component';
import { WorkplaceDashboardComponent } from './workplace.component';

const dashboardRoutes: Routes = [
    {
        path: 'analysis',
        component: AnalysisDashboardComponent,
        data: { title: '分析页' }
    },
    {
        path: 'monitor',
        component: MonitorDashboardComponent,
        data: { title: '监控页' }
    },
    {
        path: 'workplace',
        component: WorkplaceDashboardComponent,
        data: { title: '工作台' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {

}
