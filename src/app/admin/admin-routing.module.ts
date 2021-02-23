import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../service/auth-guard.service';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ChangelogComponent } from './changelog/changelog.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard/analysis',
            },
            {
                path: 'home',
                component: HomeComponent,
                data: { title: 'Home' }
            },
            {
                path: 'changelog',
                component: ChangelogComponent,
                data: { title: '更新日志' }
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'form',
                loadChildren: () => import('./form/form.module').then(m => m.FromModule)
            },
            {
                path: 'list',
                loadChildren: () => import('./list/list.module').then(m => m.ListModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'result',
                loadChildren: () => import('./result/result.module').then(m => m.ResultModule)
            },
            {
                path: 'exception',
                loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule)
            },
            {
                path: 'account',
                loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
            },
            {
                path: 'migration',
                loadChildren: () => import('./migration/migration.module').then(m => m.MigrationModule)
            }
        ],
    },
    {
        path: 'user',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {

}
