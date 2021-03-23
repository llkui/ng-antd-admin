import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { Chart, registerShape } from '@antv/g2';
import { insertCss } from 'insert-css';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, addDays, isToday, getYear, getMonth } from 'date-fns';

import { CommonService } from './../../service/common.service';

@Component({
    selector: 'app-dashboard-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.scss']
})

export class AnalysisDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
    loading = true;
    tabIndex = 0;
    date = [new Date(), new Date()];
    dateType = 'day';
    rankingList = [
        { sort: 1, name: '工专路 0 号店', num: 323234 },
        { sort: 2, name: '工专路 1 号店', num: 323234 },
        { sort: 3, name: '工专路 2 号店', num: 323234 },
        { sort: 4, name: '工专路 3 号店', num: 323234 },
        { sort: 5, name: '工专路 4 号店', num: 323234 },
        { sort: 6, name: '工专路 5 号店', num: 323234 },
        { sort: 7, name: '工专路 6 号店', num: 323234 },
    ];
    type = 'all';
    listOfData = [];
    saleTypeData = [];
    saleTypeChart = null;
    StoresList = [];
    accessChart = null;
    chatTimeout = null;

    constructor(
        private commonS: CommonService
    ) {
        this.commonS.layout.subscribe(() => {
            this.eventResize();
        });
    }

    ngOnInit() {
        for (let i = 1; i < 51; i++) {
            this.listOfData.push({
                sort: i,
                key: '搜索关键词-' + i,
                user_num: Math.ceil(Math.random() * 1000),
                growth: Math.ceil(Math.random() * 100),
                status: Math.round(Math.random())
            });
        }

        this.saleTypeData = [
            { id: 1, type: '家用电器', value: 4544, percent: '28.79%', checked: true, color: '#5DB1FF' },
            { id: 2, type: '食用酒水', value: 3321, percent: '21.04%', checked: true, color: '#36CBCB' },
            { id: 3, type: '个护健康', value: 3113, percent: '19.73%', checked: true, color: '#4ECB73' },
            { id: 4, type: '服饰箱包', value: 2341, percent: '14.83%', checked: true, color: '#FBD437' },
            { id: 5, type: '母婴产品', value: 1231, percent: '7.80%', checked: true, color: '#F2637B' },
            { id: 6, type: '其他', value: 1231, percent: '7.80%', checked: true, color: '#975FE5' },
        ];

        this.StoresList = [
            { id: 1, name: 'Soters 0', value: 0.50 },
            { id: 2, name: 'Soters 1', value: 0.40 },
            { id: 3, name: 'Soters 2', value: 0.50 },
            { id: 4, name: 'Soters 3', value: 0.50 },
            { id: 5, name: 'Soters 4', value: 0.90 },
            { id: 6, name: 'Soters 5', value: 0.60 },
            { id: 7, name: 'Soters 6', value: 0.60 },
            { id: 8, name: 'Soters 7', value: 0.30 },
            { id: 9, name: 'Soters 8', value: 0.20 },
            { id: 10, name: 'Soters 9', value: 0.20 },
        ];
    }

    ngAfterViewInit() {
        // 使用autoFit自适应时，首次渲染会超出范围，故主动触发resize函数
        this.chatTimeout = setTimeout(() => {
            this.loading = false;

            setTimeout(() => {
                this.getAccess();
                this.getPay();
                this.getSales();
                this.getSaleType(this.saleTypeData);
                this.getSearchUser();
                this.getUserSearch();
                this.getStores();

                this.eventResize();
            }, 0);
        }, 600);
    }

    ngOnDestroy() {
        if (this.chatTimeout) {
            clearTimeout(this.chatTimeout);
        }
    }

    eventResize() {
        const e = document.createEvent('Event');
        e.initEvent('resize', true, true);
        window.dispatchEvent(e);
    }

    getAccess() {
        const year = getYear(new Date());
        const month = getMonth(new Date());
        const data = [
            { day: year + '-' + (month + 1) + '-01', value: 7 },
            { day: year + '-' + (month + 1) + '-02', value: 5 },
            { day: year + '-' + (month + 1) + '-03', value: 4 },
            { day: year + '-' + (month + 1) + '-04', value: 2 },
            { day: year + '-' + (month + 1) + '-05', value: 4 },
            { day: year + '-' + (month + 1) + '-06', value: 7 },
            { day: year + '-' + (month + 1) + '-07', value: 5 },
            { day: year + '-' + (month + 1) + '-08', value: 6 },
            { day: year + '-' + (month + 1) + '-09', value: 5 },
            { day: year + '-' + (month + 1) + '-10', value: 9 },
            { day: year + '-' + (month + 1) + '-11', value: 6 },
            { day: year + '-' + (month + 1) + '-12', value: 3 },
            { day: year + '-' + (month + 1) + '-13', value: 1 },
            { day: year + '-' + (month + 1) + '-14', value: 5 },
            { day: year + '-' + (month + 1) + '-15', value: 3 },
            { day: year + '-' + (month + 1) + '-16', value: 6 },
            { day: year + '-' + (month + 1) + '-17', value: 5 },
        ];

        this.accessChart = new Chart({
            container: 'access', // 指定图表容器 ID
            autoFit: true,
            height: 32, // 指定图表高度,
        });

        this.accessChart.data(data);
        this.accessChart.scale({
            sale: {
                min: 0,
                max: 20,
            },
        });
        this.accessChart.tooltip({
            showTitle: false,
        });
        this.accessChart.axis('value', {
            grid: {
                line: null
            },
            label: null
        });
        this.accessChart.axis('day', {
            line: null,
            tickLine: null,
            label: null
        });
        this.accessChart.legend(false);
        this.accessChart
            .area()
            // 光滑
            .shape('smooth')
            .position('day*value');

        // Step 4: 渲染图表
        this.accessChart.render();
    }

    getPay() {
        const year = getYear(new Date());
        const month = getMonth(new Date());
        const data = [
            { day: year + '-' + (month + 1) + '-01', value: 7 },
            { day: year + '-' + (month + 1) + '-02', value: 5 },
            { day: year + '-' + (month + 1) + '-03', value: 4 },
            { day: year + '-' + (month + 1) + '-04', value: 2 },
            { day: year + '-' + (month + 1) + '-05', value: 4 },
            { day: year + '-' + (month + 1) + '-06', value: 7 },
            { day: year + '-' + (month + 1) + '-07', value: 5 },
            { day: year + '-' + (month + 1) + '-08', value: 6 },
            { day: year + '-' + (month + 1) + '-09', value: 5 },
            { day: year + '-' + (month + 1) + '-10', value: 9 },
            { day: year + '-' + (month + 1) + '-11', value: 6 },
            { day: year + '-' + (month + 1) + '-12', value: 3 },
            { day: year + '-' + (month + 1) + '-13', value: 1 },
            { day: year + '-' + (month + 1) + '-14', value: 5 },
            { day: year + '-' + (month + 1) + '-15', value: 3 },
            { day: year + '-' + (month + 1) + '-16', value: 6 },
            { day: year + '-' + (month + 1) + '-17', value: 5 },
        ];

        const chart = new Chart({
            container: 'pay', // 指定图表容器 ID
            autoFit: true,
            height: 32, // 指定图表高度,
        });

        chart.data(data);
        chart.scale({
            sale: {
                min: 0,
                max: 20,
            },
        });
        chart.tooltip({
            showTitle: false,
        });
        chart.axis('value', {
            grid: {
                line: null
            },
            label: null
        });
        chart.axis('day', {
            line: null,
            tickLine: null,
            label: null
        });
        chart.legend(false);
        chart
            .interval()
            .position('day*value')
            // 设置颜色
            .color('day', (val) => {
                return '#58AFFF';
            });

        // Step 4: 渲染图表
        chart.render();
    }

    getSales() {
        insertCss(`
        .g2-label-spec {
            font-size: 12px;
            text-align: center;
            position: absolute;
            width: 200px;
            color: #595959;
        }

        .g2-label-spec-value {
            color: #ff5250;
            font-weight: bold;
        }
        `);

        const data = [
            { genre: '1月', sold: 736 },
            { genre: '2月', sold: 837 },
            { genre: '3月', sold: 682 },
            { genre: '4月', sold: 1110 },
            { genre: '5月', sold: 828 },
            { genre: '6月', sold: 1185 },
            { genre: '7月', sold: 275 },
            { genre: '8月', sold: 581 },
            { genre: '9月', sold: 729 },
            { genre: '10月', sold: 324 },
            { genre: '11月', sold: 894 },
            { genre: '12月', sold: 1102 },
        ];

        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: 'sales', // 指定图表容器 ID
            autoFit: true,
            height: 254, // 指定图表高度,
        });

        chart.scale('sold', {
            ticks: [0, 200, 400, 600, 800, 1000, 1200],
        });

        // Step 2: 载入数据源
        chart.data(data);

        // 配置提示信息
        chart.tooltip({
            showTitle: false
        });

        chart.axis('sold', {
            grid: {
                line: {
                    style: {
                        lineWidth: 1,
                        lineDash: [2]
                    }
                }
            }
        });

        chart.axis('genre', {
            line: {
                style: {
                    lineWidth: 1,
                    stroke: '#BFBFBF'
                }
            }
        });

        // 关闭图例
        chart.legend(false);

        // Step 3：创建图形语法，绘制柱状图
        chart
            .interval()
            .position('genre*sold')
            // 设置颜色
            .color('genre', (val) => {
                return '#58AFFF';
            });

        // Step 4: 渲染图表
        chart.render();
    }

    getSaleType(data) {
        // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
        const sliceNumber = 0.01;

        // 自定义 other 的图形，增加两条线
        registerShape('interval', 'slice-shape', {
            draw(cfg, container) {
                const points = cfg.points;
                let path = [];
                path.push(['M', (points[0] as any).x, (points[0] as any).y]);
                path.push(['L', (points[1] as any).x, (points[1] as any).y - sliceNumber]);
                path.push(['L', (points[2] as any).x, (points[2] as any).y - sliceNumber]);
                path.push(['L', (points[3] as any).x, (points[3] as any).y]);
                path.push('Z');
                path = this.parsePath(path);
                return container.addShape('path', {
                    attrs: {
                        fill: cfg.color,
                        path,
                    },
                });
            },
        });

        this.saleTypeChart = new Chart({
            container: 'saleType',
            autoFit: true,
            height: 248,
        });

        this.saleTypeChart.data(data);
        this.saleTypeChart.coordinate('theta', {
            radius: 0.75,
            innerRadius: 0.6,
        });
        this.saleTypeChart.tooltip({
            showTitle: false,
            showMarkers: false,
        });
        this.saleTypeChart.legend(false);
        this.saleTypeChart
            .interval()
            .adjust('stack')
            .position('value')
            .color('type*color', (type, color) => {
                return color;
            })
            .shape('slice-shape')
            .tooltip('type*percent', (type, percent) => {
                return {
                    name: type,
                    value: percent,
                };
            });

        this.saleTypeChart.interaction('element-single-selected');
        this.saleTypeChart.render();
    }

    getSearchUser() {
        const year = getYear(new Date());
        const month = getMonth(new Date());
        const data = [
            { day: year + '-' + (month + 1) + '-01', value: 1 },
            { day: year + '-' + (month + 1) + '-02', value: 6 },
            { day: year + '-' + (month + 1) + '-03', value: 4 },
            { day: year + '-' + (month + 1) + '-04', value: 8 },
            { day: year + '-' + (month + 1) + '-05', value: 3 },
            { day: year + '-' + (month + 1) + '-06', value: 7 },
            { day: year + '-' + (month + 1) + '-07', value: 2 },
        ];

        const chart = new Chart({
            container: 'searchUser', // 指定图表容器 ID
            autoFit: true,
            height: 32, // 指定图表高度,
        });

        chart.data(data);
        chart.scale({
            sale: {
                min: 0,
                max: 20,
            },
        });
        chart.tooltip({
            showTitle: false,
        });
        chart.axis('value', {
            grid: {
                line: null
            },
            label: null
        });
        chart.axis('day', {
            line: null,
            tickLine: null,
            label: null
        });
        chart.legend(false);
        chart
            .area()
            // 光滑
            .shape('smooth')
            .position('day*value');
        chart
            .line()
            // 光滑
            .shape('smooth')
            .position('day*value');

        // Step 4: 渲染图表
        chart.render();
    }

    getUserSearch() {
        const year = getYear(new Date());
        const month = getMonth(new Date());
        const data = [
            { day: year + '-' + (month + 1) + '-01', value: 1 },
            { day: year + '-' + (month + 1) + '-02', value: 6 },
            { day: year + '-' + (month + 1) + '-03', value: 4 },
            { day: year + '-' + (month + 1) + '-04', value: 8 },
            { day: year + '-' + (month + 1) + '-05', value: 3 },
            { day: year + '-' + (month + 1) + '-06', value: 7 },
            { day: year + '-' + (month + 1) + '-07', value: 2 },
        ];

        const chart = new Chart({
            container: 'userSearch', // 指定图表容器 ID
            autoFit: true,
            height: 32, // 指定图表高度,
        });

        chart.data(data);
        chart.scale({
            sale: {
                min: 0,
                max: 20,
            },
        });
        chart.tooltip({
            showTitle: false,
        });
        chart.axis('value', {
            grid: {
                line: null
            },
            label: null
        });
        chart.axis('day', {
            line: null,
            tickLine: null,
            label: null
        });
        chart.legend(false);
        chart
            .area()
            // 光滑
            .shape('smooth')
            .position('day*value');
        chart
            .line()
            // 光滑
            .shape('smooth')
            .position('day*value');

        // Step 4: 渲染图表
        chart.render();
    }

    getStores() {
        const data = [
            { time: '21:08', type: '客流量', value: 71 },
            { time: '21:08', type: '支付笔数', value: 30 },
            { time: '21:38', type: '客流量', value: 21, },
            { time: '21:38', type: '支付笔数', value: 63 },
            { time: '22:08', type: '客流量', value: 107, },
            { time: '22:08', type: '支付笔数', value: 28 },
            { time: '22:38', type: '客流量', value: 47, },
            { time: '22:38', type: '支付笔数', value: 97 },
            { time: '23:08', type: '客流量', value: 22, },
            { time: '23:08', type: '支付笔数', value: 109 },
            { time: '23:38', type: '客流量', value: 17, },
            { time: '23:38', type: '支付笔数', value: 36 },
            { time: '00:08', type: '客流量', value: 83, },
            { time: '00:08', type: '支付笔数', value: 109 },
            { time: '00:38', type: '客流量', value: 95, },
            { time: '00:38', type: '支付笔数', value: 98 },
            { time: '01:08', type: '客流量', value: 21, },
            { time: '01:08', type: '支付笔数', value: 75 },
            { time: '01:38', type: '客流量', value: 71, },
            { time: '01:38', type: '支付笔数', value: 108 },
            { time: '02:08', type: '客流量', value: 76, },
            { time: '02:08', type: '支付笔数', value: 72 },
            { time: '02:38', type: '客流量', value: 60, },
            { time: '02:38', type: '支付笔数', value: 84 },
            { time: '03:08', type: '客流量', value: 36, },
            { time: '03:08', type: '支付笔数', value: 76 },
            { time: '03:38', type: '客流量', value: 14, },
            { time: '03:38', type: '支付笔数', value: 83 },
            { time: '04:08', type: '客流量', value: 77, },
            { time: '04:08', type: '支付笔数', value: 21 },
            { time: '04:38', type: '客流量', value: 91, },
            { time: '04:38', type: '支付笔数', value: 99 },
            { time: '05:08', type: '客流量', value: 11, },
            { time: '05:08', type: '支付笔数', value: 61 },
            { time: '05:38', type: '客流量', value: 99, },
            { time: '05:38', type: '支付笔数', value: 100 },
            { time: '06:08', type: '客流量', value: 23, },
            { time: '06:08', type: '支付笔数', value: 23 },
            { time: '06:38', type: '客流量', value: 28, },
            { time: '06:38', type: '支付笔数', value: 102 },
        ];

        const chart = new Chart({
            container: 'stores',
            autoFit: true,
            height: 500,
        });

        chart.data(data);
        chart.scale({
            value: {
                ticks: [0, 20, 40, 60, 80, 100, 120],
            },
            time: {
                // 坐标轴两边留白
                range: [0, 1],
                tickInterval: 2,
                tickCount: 9
            }
        });

        chart.tooltip({
            showCrosshairs: true,
            shared: true,
        });

        chart.axis('value', {
            label: {
                formatter: (val) => {
                    return val + '';
                },
            },
        });

        chart.legend('type', {
            position: 'top'
        });

        // 底部滑块
        chart.option('slider', {
        });

        chart
            .line()
            .position('time*value')
            .color('type');

        chart.render();
    }

    changeDateType(value) {
        this.dateType = value;
        switch (value) {
            case 'day':
                this.date = [new Date(), new Date()];
                break;
            case 'week':
                this.date = [addDays(startOfWeek(new Date()), 1), addDays(endOfWeek(new Date()), 1)];
                break;
            case 'month':
                this.date = [startOfMonth(new Date()), endOfMonth(new Date())];
                break;
            case 'year':
                this.date = [startOfYear(new Date()), endOfYear(new Date())];
                break;
        }
    }

    onChangeDate($event) {
        if ($event.length > 0) {
            if (isToday($event[0]) && isToday($event[1])) {
                this.dateType = 'day';
            } else if ((format($event[0], 'yyyy-MM-dd') === format(addDays(startOfWeek(new Date()), 1), 'yyyy-MM-dd'))
                && (format($event[1], 'yyyy-MM-dd') === format(addDays(endOfWeek(new Date()), 1), 'yyyy-MM-dd'))) {
                this.dateType = 'week';
            } else if ((format($event[0], 'yyyy-MM-dd') === format(startOfMonth(new Date()), 'yyyy-MM-dd'))
                && (format($event[1], 'yyyy-MM-dd') === format(endOfMonth(new Date()), 'yyyy-MM-dd'))) {
                this.dateType = 'month';
            } else if ((format($event[0], 'yyyy-MM-dd') === format(startOfYear(new Date()), 'yyyy-MM-dd'))
                && (format($event[1], 'yyyy-MM-dd') === format(endOfYear(new Date()), 'yyyy-MM-dd'))) {
                this.dateType = 'year';
            } else {
                this.dateType = null;
            }
        } else {
            this.dateType = null;
        }
    }

    userSort = (a: any, b: any) => {
        return a.user_num - b.user_num;
    }

    growthSort = (a: any, b: any) => {
        return a.growth - b.growth;
    }

    changeSaleType(id) {
        const info = this.saleTypeData.find(item => item.id === id);
        info.checked = !info.checked;
        const data = this.saleTypeData.filter(item => item.checked);
        this.saleTypeChart.changeData(data);
    }
}
