import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-account-center',
    templateUrl: './center.component.html',
    styleUrls: ['./center.component.scss']
})

export class CenterAccountComponent implements OnInit {
    isSpinning = true;
    tags = ['很有想法的', '专注设计', '辣~', '大长腿', '川妹子', '海纳百川'];
    inputVisible = false;
    inputValue = '';
    @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;
    teamList = [];
    selectedIndex = 0;
    articleList = [
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
        }, {
            title: 'React',
            tagList: [{ name: 'Ant Design' }, { name: '设计语言' }, { name: '蚂蚁金服' }],
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
            author: '朱偏右',
            href: 'https://ng.ant.design',
            time: '2020-11-13 02:12',
            start: '113',
            like: '191',
            message: '12',
        }, {
            title: 'Vue',
            tagList: [{ name: 'Ant Design' }, { name: '设计语言' }, { name: '蚂蚁金服' }],
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
            author: '鱼酱',
            href: 'https://ng.ant.design',
            time: '2020-11-13 02:12',
            start: '167',
            like: '172',
            message: '14',
        }, {
            title: 'Webpack',
            tagList: [{ name: 'Ant Design' }, { name: '设计语言' }, { name: '蚂蚁金服' }],
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
            author: '乐哥',
            href: 'https://ng.ant.design',
            time: '2020-11-13 02:12',
            start: '182',
            like: '138',
            message: '18',
        }
    ];
    applicationList = [
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
    projectList = [
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

    constructor() { }

    ngOnInit() {
        this.teamList = [
            {
                id: 1,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                name: '科学搬砖组'
            },
            {
                id: 2,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                name: '全组都是吴彦祖'
            },
            {
                id: 3,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                name: '中二少女团'
            },
            {
                id: 4,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                name: '程序员日常'
            },
            {
                id: 5,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                name: '高逼格设计天团'
            },
            {
                id: 6,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
                name: '骗你来学计算机'
            },
        ];

        setTimeout(() => {
            this.isSpinning = false;
        }, 1000);
    }

    sliceTagName(tag: string): string {
        const isLongTag = tag.length > 20;
        return isLongTag ? `${tag.slice(0, 20)}...` : tag;
    }

    showInput(): void {
        this.inputVisible = true;
        setTimeout(() => {
            this.inputElement?.nativeElement.focus();
        }, 10);
    }

    handleInputConfirm(): void {
        if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
            this.tags = [...this.tags, this.inputValue];
        }
        this.inputValue = '';
        this.inputVisible = false;
    }
}
