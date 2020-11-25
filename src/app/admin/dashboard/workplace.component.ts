import { Component, OnInit, AfterViewInit } from '@angular/core';

import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';

@Component({
    selector: 'app-dashboard-workplace',
    templateUrl: './workplace.component.html',
    styleUrls: ['./workplace.component.scss']
})

export class WorkplaceDashboardComponent implements OnInit, AfterViewInit {
    projectList = [];
    dynamicList = [];
    linkList = [];
    teamList = [];
    typeData = [];
    typeList = [];
    typeChart = null;

    constructor() { }

    ngOnInit() {
        this.projectList = [
            {
                id: 1,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                name: 'Alipay',
                desc: '那是一种内在的东西，他们到达不了，也无法触及的',
                group: '科学搬砖组',
                time: '15 小时前'
            }, {
                id: 2,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                name: 'Angular',
                desc: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                group: '全组都是吴彦祖',
                time: '3 年前'
            }, {
                id: 3,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                name: 'Ant Design',
                desc: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
                group: '中二少女团',
                time: '15 小时前'
            }, {
                id: 4,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                name: 'Ant Design Pro',
                desc: '那时候我只会想自己想要什么，从不想自己拥有什么',
                group: '程序员日常',
                time: '3 年前'
            }, {
                id: 5,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                name: 'Bootstrap',
                desc: '凛冬将至',
                group: '高逼格设计天团',
                time: '3 年前'
            }, {
                id: 6,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
                name: 'React',
                desc: '生命就像一盒巧克力，结果往往出人意料',
                group: '骗你来学计算机',
                time: '3 年前'
            },
        ];

        this.dynamicList = [
            {
                id: 1,
                type: 'createProject',
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                user: '曲丽丽',
                group: '高逼格设计天团',
                project: '六月迭代',
                project_status: '',
                time: '15 小时前'
            }, {
                id: 2,
                type: 'createProject',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
                user: '付小小',
                group: '高逼格设计天团',
                project: '六月迭代',
                project_status: '',
                time: '15 小时前'
            }, {
                id: 3,
                type: 'createProject',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
                user: '林东东',
                group: '中二少女团',
                project: '六月迭代',
                project_status: '',
                time: '15 小时前'
            }, {
                id: 4,
                type: 'updateStatus',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
                user: '周星星',
                group: '',
                project: '5 月日常迭代',
                project_status: '已发布',
                time: '15 小时前'
            }, {
                id: 5,
                type: 'release',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
                user: '朱偏右',
                group: '工程效能',
                project: '留言',
                project_status: '',
                time: '15 小时前'
            }, {
                id: 6,
                type: 'createProject',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
                user: '乐哥',
                group: '程序员日常',
                project: '品牌迭代',
                project_status: '',
                time: '15 小时前'
            },
        ];

        this.linkList = [
            '操作一', '操作二', '操作三', '操作四', '操作五', '操作六',
        ];

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
    }

    ngAfterViewInit() {
        this.typeData = [
            { item: '引用', a: 10, b: 3, c: 4 },
            { item: '口碑', a: 8, b: 9, c: 1 },
            { item: '产量', a: 4, b: 6, c: 6 },
            { item: '贡献', a: 5, b: 3, c: 5 },
            { item: '热度', a: 7, b: 1, c: 7 },
        ];
        let aTotal = 0;
        let bTotal = 0;
        let cTotal = 0;
        this.typeData.forEach(item => {
            aTotal += item.a;
            bTotal += item.b;
            cTotal += item.c;
        });
        setTimeout(() => {
            this.typeList = [
                { type: 'a', name: '个人', total: aTotal, checked: true, color: '#1890FF' },
                { type: 'b', name: '团队', total: bTotal, checked: true, color: '#FACC14' },
                { type: 'c', name: '部门', total: cTotal, checked: true, color: '#2FC25B' },
            ];
        }, 0);

        const { DataView } = DataSet;
        const dv = new DataView().source(this.typeData);
        dv.transform({
            type: 'fold',
            fields: ['a', 'b', 'c'], // 展开字段集
            key: 'user', // key字段
            value: 'score', // value字段
        });
        dv.transform({
            type: 'map',
            callback(row) { // 加工数据后返回新的一行，默认返回行数据本身
                switch (row.user) {
                    case 'a':
                        row.color = '#1890FF';
                        break;
                    case 'b':
                        row.color = '#FACC14';
                        break;
                    case 'c':
                        row.color = '#2FC25B';
                        break;

                }
                return row;
            }
        });

        this.getExponent(dv);
    }

    getExponent(dv) {
        this.typeChart = new Chart({
            container: 'exponent',
            autoFit: true,
            height: 263,
        });
        this.typeChart.scale('score', {
            min: 0,
            max: 10,
        });
        this.typeChart.data(dv.rows);

        // 关闭图例
        this.typeChart.legend(false);
        this.typeChart.coordinate('polar', {
            radius: 0.8,
        });
        this.typeChart.tooltip({
            shared: true,
            showCrosshairs: true,
            crosshairs: {
                line: {
                    style: {
                        lineDash: [4, 4],
                        stroke: '#333'
                    }
                }
            }
        });
        this.typeChart.axis('item', {
            // 添加最外层实线圈
            line: {
                style: {
                    lineWidth: 1,
                    stroke: '#BFBFBF'
                }
            },
            // 添加刻度
            tickLine: {
                style: {
                    lineWidth: 1,
                    stroke: '#BFBFBF'
                }
            },
            // 标签偏移量
            label: {
                offset: 20
            },
            grid: {
                line: {
                    style: {
                        lineDash: [2],
                    },
                },
            },
        });
        this.typeChart.axis('score', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    type: 'line',
                    style: {
                        lineDash: [2],
                    },
                },
            },
        });

        this.typeChart
            .line()
            .position('item*score')
            .color('user*color', (user, color) => {
                return color;
            })
            .tooltip('user*score', (user, score) => {
                let userName = '';
                switch (user) {
                    case 'a':
                        userName = '个人';
                        break;
                    case 'b':
                        userName = '团队';
                        break;
                    case 'c':
                        userName = '部门';
                        break;
                }
                return {
                    name: userName,
                    value: score,
                };
            })
            .size(2);
        this.typeChart
            .point()
            .position('item*score')
            .color('user*color', (user, color) => {
                return color;
            })
            .shape('circle')
            .size(4)
            .style({
                stroke: '#fff',
                lineWidth: 1,
                fillOpacity: 1,
            });
        this.typeChart.render();
    }

    changeType(type) {
        const info = this.typeList.find(item => item.type === type.type);
        info.checked = !info.checked;
        const data = this.typeList.filter(item => item.checked).map(item => {
            return item.type;
        });

        const { DataView } = DataSet;
        const dv = new DataView().source(this.typeData);
        dv.transform({
            type: 'fold',
            fields: data, // 展开字段集
            key: 'user', // key字段
            value: 'score', // value字段
        });
        dv.transform({
            type: 'map',
            callback(row) { // 加工数据后返回新的一行，默认返回行数据本身
                switch (row.user) {
                    case 'a':
                        row.color = '#1890FF';
                        break;
                    case 'b':
                        row.color = '#FACC14';
                        break;
                    case 'c':
                        row.color = '#2FC25B';
                        break;

                }
                return row;
            }
        });
        this.typeChart.changeData(dv.rows);
    }
}
