import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-card',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnInit {
    list = [];
    isSpinning = false;

    constructor() { }

    ngOnInit() {
        this.search();
    }

    search() {
        this.isSpinning = true;
        setTimeout(() => {
            this.list = [
                {
                    id: 1,
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                    name: 'Alipay',
                    desc: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
                },
                {
                    id: 2,
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                    name: 'Angular',
                    desc: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
                },
                {
                    id: 3,
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                    name: 'Ant Design',
                    desc: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
                },
                {
                    id: 4,
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                    name: 'Ant Design Pro',
                    desc: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
                },
                {
                    id: 5,
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                    name: 'Bootstrap',
                    desc: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
                },
                {
                    id: 6,
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
                    name: 'React',
                    desc: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
                },
                {
                    id: 7,
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
                    name: 'Vue',
                    desc: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
                },
                {
                    id: 8,
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
                    name: 'Webpack',
                    desc: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
                },
            ];
            this.isSpinning = false;
        }, 1000);
    }
}
