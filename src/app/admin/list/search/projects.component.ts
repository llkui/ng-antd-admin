import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';

@Component({
    selector: 'app-list-search-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class SearchProjectsComponent implements OnInit {
    typeAll = false;
    typeList = [];
    searchInfo = {
        author: null,
        like: null
    };
    expanded = false;
    projectList = [];

    constructor(
        private searchS: SearchService
    ) {
        // 通知search组件，路由切换
        this.searchS.changeSearchType('projects');
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
        this.projectList = [
            {
                id: 1,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
                title: 'Alipay',
                desc: '那是一种内在的东西， 他们到达不了，也无法触及的',
                time: '17 分钟前',
                memberList: [
                    { id: 1, cover: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png', name: '曲丽丽' },
                    { id: 2, cover: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png', name: '王昭君' },
                    { id: 3, cover: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png', name: '董娜娜' }
                ]
            },
            {
                id: 2,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
                title: 'Angular',
                desc: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                time: '2 小时前',
                memberList: [
                    { id: 1, cover: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png', name: '曲丽丽' },
                    { id: 2, cover: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png', name: '王昭君' },
                    { id: 3, cover: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png', name: '董娜娜' }
                ]
            },
            {
                id: 3,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
                title: 'Ant Design',
                desc: '生命就像一盒巧克力，结果往往出人意料',
                time: '4 小时前',
                memberList: [
                    { id: 1, cover: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png', name: '曲丽丽' },
                    { id: 2, cover: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png', name: '王昭君' },
                    { id: 3, cover: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png', name: '董娜娜' }
                ]
            },
            {
                id: 4,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
                title: 'Ant Design Pro',
                desc: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
                time: '6 小时前',
                memberList: [
                    { id: 1, cover: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png', name: '曲丽丽' },
                    { id: 2, cover: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png', name: '王昭君' },
                    { id: 3, cover: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png', name: '董娜娜' }
                ]
            },
            {
                id: 5,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
                title: 'Bootstrap',
                desc: '那时候我只会想自己想要什么，从不想自己拥有什么',
                time: '8 小时前',
                memberList: [
                    { id: 1, cover: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png', name: '曲丽丽' },
                    { id: 2, cover: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png', name: '王昭君' },
                    { id: 3, cover: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png', name: '董娜娜' }
                ]
            },
            {
                id: 6,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
                title: 'React',
                desc: '那是一种内在的东西， 他们到达不了，也无法触及的',
                time: '10 小时前',
                memberList: [
                    { id: 1, cover: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png', name: '曲丽丽' },
                    { id: 2, cover: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png', name: '王昭君' },
                    { id: 3, cover: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png', name: '董娜娜' }
                ]
            },
            {
                id: 7,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
                title: 'Vue',
                desc: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                time: '12 小时前',
                memberList: [
                    { id: 1, cover: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png', name: '曲丽丽' },
                    { id: 2, cover: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png', name: '王昭君' },
                    { id: 3, cover: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png', name: '董娜娜' }
                ]
            },
            {
                id: 8,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
                title: 'Webpack',
                desc: '生命就像一盒巧克力，结果往往出人意料',
                time: '14 小时前',
                memberList: [
                    { id: 1, cover: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png', name: '曲丽丽' },
                    { id: 2, cover: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png', name: '王昭君' },
                    { id: 3, cover: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png', name: '董娜娜' }
                ]
            },
        ];
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
}
