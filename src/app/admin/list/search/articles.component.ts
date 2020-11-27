import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';

@Component({
    selector: 'app-list-search-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})

export class SearchArticlesComponent implements OnInit {
    typeAll = false;
    typeList = [];
    searchInfo = {
        owner: [2, 3, '2', '3'],
        author: null,
        like: null
    };
    expanded = false;
    articleList = [];
    loadingMore = false;
    baseArticle = [
        {
            title: 'Alipay',
            tagList: [{ name: 'Ant Design' }, { name: '设计语言' }, { name: '蚂蚁金服' }],
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            author: '付小小',
            href: 'https://ng.ant.design',
            time: '2020-11-13 10:12',
            start: '145',
            like: '116',
            message: '19',
        }, {
            title: 'Angular',
            tagList: [{ name: 'Ant Design' }, { name: '设计语言' }, { name: '蚂蚁金服' }],
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
            author: '曲丽丽',
            href: 'https://ng.ant.design',
            time: '2020-11-13 08:12',
            start: '188',
            like: '124',
            message: '20',
        }, {
            title: 'Ant Design',
            tagList: [{ name: 'Ant Design' }, { name: '设计语言' }, { name: '蚂蚁金服' }],
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
            author: '林东东',
            href: 'https://ng.ant.design',
            time: '2020-11-13 06:12',
            start: '134',
            like: '185',
            message: '18',
        }, {
            title: 'Ant Design Pro',
            tagList: [{ name: 'Ant Design' }, { name: '设计语言' }, { name: '蚂蚁金服' }],
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
            author: '周星星',
            href: 'https://ng.ant.design',
            time: '2020-11-13 04:12',
            start: '145',
            like: '158',
            message: '13',
        }, {
            title: 'Bootstrap',
            tagList: [{ name: 'Ant Design' }, { name: '设计语言' }, { name: '蚂蚁金服' }],
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
            author: '吴加好',
            href: 'https://ng.ant.design',
            time: '2020-11-13 02:12',
            start: '157',
            like: '122',
            message: '15',
        }
    ];

    constructor(
        private searchS: SearchService
    ) {
        // 通知search组件，路由切换
        this.searchS.changeSearchType('article');
    }

    ngOnInit() {
        this.typeList = [
            { id: 1, name: '类目一', checked: false },
            { id: 2, name: '类目二', checked: false },
            { id: 3, name: '类目三', checked: false },
            { id: 4, name: '类目四', checked: false },
            { id: 5, name: '类目五', checked: false },
            { id: 6, name: '类目六', checked: false },
            { id: 7, name: '类目七', checked: false },
            { id: 8, name: '类目八', checked: false },
            { id: 9, name: '类目九', checked: false },
            { id: 10, name: '类目十', checked: false },
            { id: 11, name: '类目十一', checked: false },
            { id: 12, name: '类目十二', checked: false },
        ];
        this.articleList = [...this.articleList, ...this.baseArticle];
    }

    typeChangeAll($event) {
        this.typeList.forEach(item => {
            item.checked = $event;
        });
    }

    typeChange() {
        let checked = true;
        this.typeList.forEach(item => {
            if (!item.checked) {
                checked = false;
            }
        });
        this.typeAll = checked;
    }

    onLoadMore() {
        this.loadingMore = true;
        setTimeout(() => {
            this.loadingMore = false;
            this.articleList = [...this.articleList, ...this.baseArticle];
        }, 1000);
    }
}
