import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
    menuList = [];
    showSearch = false;
    searchOptions = [];
    inputValue = 'Pro Table';
    noticeList = [];
    messageList = [];
    taskList = [];
    bellInfo = {
        total: 11,
        notice: 4,
        message: 3,
        task: 4,
    };

    constructor(
        private platformLocation: PlatformLocation,
        private router: Router,
        private message: NzMessageService
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

        this.searchOptions = ['umi ui', 'Ant Design', 'Pro Table', 'Pro Layout'];

        this.noticeList = [
            { id: 1, type: 1, title: '你收到了 14 份新周报', time: '3 年前', read: false },
            { id: 2, type: 2, title: '你推荐的 曲妮妮 已通过第三轮面试', time: '3 年前', read: false },
            { id: 3, type: 3, title: '这种模板可以区分多种通知类型', time: '3 年前', read: true },
            { id: 4, type: 4, title: '左侧图标用于区分不同的类型', time: '3 年前', read: false },
            { id: 5, type: 1, title: '内容不要超过两行字，超出时自动截断', time: '3 年前', read: false },
        ];

        this.messageList = [
            {
                id: 1, avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '曲丽丽 评论了你', desc: '描述信息描述信息描述信息', time: '3 年前', read: false
            },
            {
                id: 2, avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '朱偏右 回复了你', desc: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像', time: '3 年前', read: false
            },
            {
                id: 3, avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '标题', desc: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像', time: '3 年前', read: false
            },
        ];

        this.taskList = [
            { id: 1, type: 1, title: '任务名称', desc: '任务需要在 2017-01-12 20:00 前启动', read: false },
            { id: 2, type: 2, title: '第三方紧急代码变更', desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务', read: false },
            { id: 3, type: 3, title: '信息安全考试', desc: '指派竹尔于 2017-01-09 前完成更新并发布', read: false },
            { id: 4, type: 4, title: 'ABCD 版本发布', desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务', read: false },
        ];
    }

    search() {
        this.showSearch = true;
    }

    inputBlur() {
        this.showSearch = false;
    }

    goUrl(url) {
        this.router.navigate([url]);
    }

    read(item) {
        item.read = true;
        this.getBellInfo();
    }

    readAll(type) {
        if (type === 'notice') {
            this.noticeList = [];
        } else if (type === 'message') {
            this.messageList = [];
        } else {
            this.taskList = [];
        }
        this.getBellInfo();
    }

    getBellInfo() {
        const noticeLength = this.noticeList.filter(i => !i.read).length;
        const messageLength = this.messageList.filter(i => !i.read).length;
        const taskLength = this.taskList.filter(i => !i.read).length;
        this.bellInfo = {
            total: noticeLength + messageLength + taskLength,
            notice: noticeLength,
            message: messageLength,
            task: taskLength
        };
    }

    readMore(type) {
        this.message.success('Click on view more');
    }
}
