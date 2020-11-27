import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
    menuList = [];

    constructor(
        private platformLocation: PlatformLocation
    ) { }

    ngOnInit() {
        this.menuList = [
            {
                title: 'Home',
                icon: 'home',
                link: '/home',
            },
            {
                title: 'Dashboard',
                icon: 'dashboard',
                open: false,
                children: [
                    {
                        title: '分析页',
                        link: '/dashboard/analysis'
                    },
                    {
                        title: '监控页',
                        link: '/dashboard/monitor'
                    },
                    {
                        title: '工作台',
                        link: '/dashboard/workplace'
                    },
                ]
            },
            {
                title: '表单页',
                icon: 'form',
                open: false,
                children: [
                    {
                        title: '基本表单',
                        link: '/form/basic-form'
                    },
                    {
                        title: '分步表单',
                        link: '/form/step-form'
                    },
                    {
                        title: '高级表单',
                        link: '/form/advanced-form'
                    },
                ]
            },
            {
                title: '列表页',
                icon: 'table',
                open: false,
                children: [
                    {
                        title: '搜索列表',
                        open: false,
                        children: [
                            {
                                title: '搜索列表（文章）',
                                link: '/list/search/articles'
                            },
                            {
                                title: '搜索列表（项目）',
                                link: '/list/search/projects'
                            },
                            {
                                title: '搜索列表（应用）',
                                link: '/list/search/applications'
                            },
                        ]
                    },
                    {
                        title: '查询表格',
                        link: '/list/table-list'
                    },
                    {
                        title: '标准列表',
                        link: '/list/basic-list'
                    },
                    {
                        title: '卡片列表',
                        link: '/list/card-list'
                    },
                ]
            },
            {
                title: '详情页',
                icon: 'profile',
                open: false,
                children: [
                    {
                        title: '基础详情页',
                        link: '/profile/basic'
                    },
                    {
                        title: '高级详情页',
                        link: '/profile/advanced'
                    },
                ]
            },
            {
                title: '结果页',
                icon: 'check-circle',
                open: false,
                children: [
                    {
                        title: '成功页',
                        link: '/result/success'
                    },
                    {
                        title: '失败页',
                        link: '/result/fail'
                    },
                ]
            },
            {
                title: '异常页',
                icon: 'warning',
                open: false,
                children: [
                    {
                        title: '403',
                        link: '/exception/403'
                    },
                    {
                        title: '404',
                        link: '/exception/404'
                    },
                    {
                        title: '500',
                        link: '/exception/500'
                    },
                ]
            },
            {
                title: '个人页',
                icon: 'user',
                open: false,
                children: [
                    {
                        title: '个人中心',
                        link: '/account/center'
                    },
                    {
                        title: '个人设置',
                        link: '/account/settings'
                    },
                ]
            },
            {
                title: '更新日志',
                icon: 'tag',
                link: '/changelog'
            },
        ];

        /**
         * 路由
         * 1、PathLocationStrategy：const url = this.platformLocation.pathname
         * 2、HashLocationStrategy：const url = this.platformLocation.hash.slice(1);
         */
    }
}
