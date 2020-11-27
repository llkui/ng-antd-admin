import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';

@Component({
    selector: 'app-list-search-applications',
    templateUrl: './applications.component.html',
    styleUrls: ['./applications.component.scss']
})

export class SearchApplicationsComponent implements OnInit {
    typeAll = false;
    typeList = [];
    searchInfo = {
        author: null,
        like: null
    };
    expanded = false;
    applicationList = [];

    constructor(
        private searchS: SearchService
    ) {
        // 通知search组件，路由切换
        this.searchS.changeSearchType('applications');
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
        this.applicationList = [
            {
                id: 1,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                title: 'Alipay',
                activeUser: '19',
                newUser: '1678'
            },
            {
                id: 2,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                title: 'Angular',
                activeUser: '17',
                newUser: '1687'
            },
            {
                id: 3,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                title: 'Ant Design',
                activeUser: '10',
                newUser: '1846'
            },
            {
                id: 4,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                title: 'Ant Design Pro',
                activeUser: '12',
                newUser: '1158'
            },
            {
                id: 5,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                title: 'Bootstrap',
                activeUser: '15',
                newUser: '1307'
            },
            {
                id: 6,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
                title: 'React',
                activeUser: '18',
                newUser: '1333'
            },
            {
                id: 7,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
                title: 'Vue',
                activeUser: '15',
                newUser: '1594'
            },
            {
                id: 8,
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
                title: 'Webpack',
                activeUser: '15',
                newUser: '1874'
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
