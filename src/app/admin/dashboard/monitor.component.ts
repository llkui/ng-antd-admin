import { Component, OnInit, AfterViewInit } from '@angular/core';
import { registerShape, Chart } from '@antv/g2';
import DataSet from '@antv/data-set';

@Component({
    selector: 'app-dashboard-monitor',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.scss']
})

export class MonitorDashboardComponent implements OnInit, AfterViewInit {
    activity = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
    predictChart = null;
    predictFirst = 1389;
    predictSecond = 720;

    constructor() { }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.getEfficiency();
        const typeList = [{
            container: 'type1',
            percent: '28%',
            data: [
                { type: '分类一', value: 28, color: '#58AFFF' },
                { type: '分类二', value: 72, color: '#F2F4F6' },
            ]
        }, {
            container: 'type2',
            percent: '22%',
            data: [
                { type: '分类一', value: 22, color: '#75E3D6' },
                { type: '分类二', value: 78, color: '#F2F4F6' },
            ]
        }, {
            container: 'type3',
            percent: '32%',
            data: [
                { type: '分类一', value: 32, color: '#6DD48C' },
                { type: '分类二', value: 68, color: '#F2F4F6' },
            ]
        }];
        typeList.forEach(item => {
            this.getType(item);
        });

        const data = [
            { time: '00:00', num: 7 },
            { time: '01:00', num: 7 },
            { time: '02:00', num: 5 },
            { time: '03:00', num: 4 },
            { time: '04:00', num: 2 },
            { time: '05:00', num: 4 },
            { time: '06:00', num: 7 },
            { time: '07:00', num: 5 },
            { time: '08:00', num: 6 },
            { time: '09:00', num: 5 },
            { time: '10:00', num: 9 },
            { time: '11:00', num: 6 },
            { time: '12:00', num: 3 },
            { time: '13:00', num: 1 },
            { time: '14:00', num: 5 },
            { time: '15:00', num: 3 },
            { time: '16:00', num: 6 },
            { time: '17:00', num: 5 },
            { time: '18:00', num: 5 },
            { time: '19:00', num: 5 },
            { time: '20:00', num: 5 },
            { time: '21:00', num: 5 },
            { time: '22:00', num: 5 },
            { time: '23:00', num: 5 },
        ];

        this.getPredict(this.getPredictData(data));

        setInterval(() => {
            this.predictChart.changeData(this.getPredictData(data));
            this.predictFirst = 1200 + Math.ceil(Math.random() * 200);
            this.predictSecond = 600 + Math.ceil(Math.random() * 200);
        }, 1000);

        this.getCity();

        // 使用autoFit自适应时，首次渲染会超出范围，故主动触发resize函数
        setTimeout(() => {
            const e = document.createEvent('Event');
            e.initEvent('resize', true, true);
            window.dispatchEvent(e);
        }, 1000);
    }

    getEfficiency() {
        // 自定义Shape 部分
        registerShape('point', 'pointer', {
            draw(cfg, container) {
                const group = container.addGroup({});
                // 获取极坐标系下画布中心点
                const center = this.parsePoint({ x: 0, y: 0 });
                // 绘制指针
                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: cfg.x,
                        y2: cfg.y,
                        stroke: cfg.color,
                        lineWidth: 2,
                        lineCap: 'round',
                    },
                });
                group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 7,
                        stroke: cfg.color,
                        lineWidth: 3,
                        fill: '#fff',
                    },
                });

                return group;
            },
        });

        const data = [{ value: 8.7 }];
        const chart = new Chart({
            container: 'efficiency',
            autoFit: true,
            height: 240,
            padding: [0, 0, 30, 0],
        });
        chart.data(data);

        chart.coordinate('polar', {
            startAngle: (-10 / 8) * Math.PI,
            endAngle: (2 / 8) * Math.PI,
            radius: 0.75,
        });
        chart.scale('value', {
            min: 0,
            max: 10,
            ticks: [1.5, 4, 6, 8.5],
        });

        chart.axis('1', false);
        chart.axis('value', {
            line: {
                style: {
                    lineWidth: 1,
                    stroke: '#BFBFBF'
                }
            },
            label: {
                offset: -30,
                formatter: (val) => {
                    if (val === '1.5') {
                        return '差';
                    } else if (val === '4') {
                        return '中';
                    } else if (val === '6') {
                        return '良';
                    }

                    return '优';
                },
                style: {
                    fontSize: 12,
                    textAlign: 'center',
                },
            },
            tickLine: null,
            grid: null,
        });
        chart.legend(false);
        chart
            .point()
            .position('value*1')
            .shape('pointer')
            .color('#1890FF');

        // 绘制仪表盘刻度线
        chart.annotation().line({
            start: [3, 0.905],
            end: [3.0035, 0.85],
            style: {
                stroke: '#19AFFA', // 线的颜色
                lineDash: null, // 虚线的设置
                lineWidth: 3,
            },
        });
        chart.annotation().line({
            start: [5, 0.905],
            end: [5, 0.85],
            style: {
                stroke: '#19AFFA', // 线的颜色
                lineDash: null, // 虚线的设置
                lineWidth: 3,
            },
        });

        chart.annotation().line({
            start: [7, 0.905],
            end: [7.0035, 0.85],
            style: {
                stroke: '#19AFFA', // 线的颜色
                lineDash: null, // 虚线的设置
                lineWidth: 3,
            },
        });

        // 绘制仪表盘背景
        chart.annotation().arc({
            top: false,
            start: [0, 1],
            end: [10, 1],
            style: {
                stroke: '#F0F2F5',
                lineWidth: 10,
                lineDash: null,
            },
        });

        // 绘制指标
        chart.annotation().arc({
            start: [0, 1],
            end: [data[0].value, 1],
            style: {
                stroke: '#1890FF',
                lineWidth: 10,
                lineDash: null,
            },
        });
        // 绘制指标数字
        chart.annotation().text({
            position: ['50%', '85%'],
            content: '跳出率',
            style: {
                fontSize: 14,
                fill: '#919191',
                textAlign: 'center',
            },
            offsetY: 0,
        });
        chart.annotation().text({
            position: ['50%', '90%'],
            content: `${data[0].value * 10} %`,
            style: {
                fontSize: 26,
                fill: '#545454',
                textAlign: 'center',
            },
            offsetY: 20,
        });

        chart.render();
    }

    getType(item) {
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

        const chart = new Chart({
            container: item.container,
            autoFit: true,
            height: 128,
        });

        chart.data(item.data);
        chart.coordinate('theta', {
            radius: 0.8,
            innerRadius: 0.75,
        });
        chart.tooltip(false);
        chart.legend(false);
        chart
            .interval()
            .adjust('stack')
            .position('value')
            .color('color', (color) => {
                return color;
            })
            .shape('slice-shape');

        // 辅助文本
        chart
            .annotation()
            .text({
                position: ['50%', '50%'],
                content: item.percent,
                style: {
                    fontSize: 20,
                    fill: '#262626',
                    textAlign: 'center',
                },
                offsetY: 0,
            });

        chart.interaction('element-single-selected');
        chart.render();
    }

    getPredict(data) {
        this.predictChart = new Chart({
            container: 'predict', // 指定图表容器 ID
            height: 80, // 指定图表高度,
            autoFit: true
        });

        this.predictChart.data(data);
        this.predictChart.tooltip({
            showTitle: false,
        });
        this.predictChart.axis('num', {
            grid: {
                line: {
                    style: {
                        lineWidth: 1,
                        lineDash: [2]
                    }
                }
            },
            label: null
        });
        this.predictChart.axis('time', {
            // 坐标轴两边留白
            range: [0, 1],
            line: null,
            tickLine: null,
            label: null
        });
        this.predictChart.scale({
            num: {
                ticks: [0, 600, 1200],
            },
            time: {
                // 坐标轴两边留白
                range: [0, 1]
            }
        });
        this.predictChart.legend(false);
        this.predictChart
            .area()
            // 光滑
            .shape('smooth')
            .color('#D1E9FF')
            .position('time*num');
        this.predictChart
            .line()
            // 光滑
            .shape('smooth')
            .color('#1089FF')
            .position('time*num')
            .tooltip('time*num', (time, num) => {
                return {
                    name: time,
                    value: num,
                };
            });
        // Step 4: 渲染图表
        this.predictChart.render();
    }

    getPredictData(data) {
        for (let i = 0; i < data.length; i++) {
            if (i < 4) {
                data[i].num = Math.ceil(Math.random() * 200);
            } else if (i < 8) {
                data[i].num = 200 + Math.ceil(Math.random() * 200);
            } else if (i < 12) {
                data[i].num = 400 + Math.ceil(Math.random() * 200);
            } else if (i < 16) {
                data[i].num = 600 + Math.ceil(Math.random() * 200);
            } else if (i < 20) {
                data[i].num = 800 + Math.ceil(Math.random() * 200);
            } else {
                data[i].num = 1000 + Math.ceil(Math.random() * 200);
            }
        }
        return data;
    }

    getCity() {
        const that = this;

        // 给point注册一个词云的shape
        registerShape('point', 'cloud', {
            draw(cfg, container) {
                const attrs = that.getTextAttrs(cfg);
                const textShape = container.addShape('text', {
                    attrs: {
                        ...attrs,
                        x: cfg.x,
                        y: cfg.y
                    }
                });
                return textShape;
            }
        });

        const data = [
            { category: '萍乡市', num: 1001, x: '萍乡市' },
            { category: '宜兰县', num: 1002, x: '宜兰县' },
            { category: '江门市', num: 1003, x: '江门市' },
            { category: '梧州市', num: 1004, x: '梧州市' },
            { category: '衡阳市', num: 1005, x: '衡阳市' },
            { category: '六盘水市', num: 1006, x: '六盘水市' },
            { category: '毕节市', num: 1007, x: '毕节市' },
            { category: '九龙', num: 1008, x: '九龙' },
            { category: '通化市', num: 1009, x: '通化市' },
            { category: '茂名市', num: 1010, x: '茂名市' },
            { category: '自贡市', num: 1011, x: '自贡市' },
            { category: '那曲地区', num: 1012, x: '那曲地区' },
            { category: '吉林市', num: 1013, x: '吉林市' },
            { category: '白城市', num: 1014, x: '白城市' },
            { category: '吴忠市', num: 1015, x: '吴忠市' },
            { category: '阿克苏地区', num: 1016, x: '阿克苏地区' },
            { category: '定西市', num: 1017, x: '定西市' },
            { category: '南平市', num: 1018, x: '南平市' },
            { category: '潍坊市', num: 1019, x: '潍坊市' },
            { category: '北京市', num: 1020, x: '北京市' },
            { category: '益阳市', num: 1021, x: '益阳市' },
            { category: '眉山市', num: 1022, x: '眉山市' },
            { category: '上海市', num: 1023, x: '上海市' },
            { category: '离岛', num: 1024, x: '离岛' },
            { category: '六盘水市', num: 1025, x: '六盘水市' },
            { category: '无锡市', num: 1026, x: '无锡市' },
            { category: '离岛', num: 1027, x: '离岛' },
            { category: '孝感市', num: 1028, x: '孝感市' },
            { category: '宿州市', num: 1029, x: '宿州市' },
            { category: '巴彦淖尔市', num: 1030, x: '巴彦淖尔市' },
        ];

        const dv = new DataSet.View().source(data);
        dv.transform({
            type: 'tag-cloud',
            fields: ['x', 'num'],
            size: [346, 128],
            font: 'Verdana',
            padding: 0,
            timeInterval: 5000, // max execute time
            rotate() {
                return 0;
            },
            fontSize(d) {
                return Math.ceil(Math.random() * 10) + 6;
            }
        });
        const chart = new Chart({
            container: 'city',
            autoFit: true,
            height: 128,
            padding: 0
        });
        chart.data(dv.rows);
        chart.scale({
            x: { nice: false },
            y: { nice: false }
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
            showMarkers: false,
            showCrosshairs: true
        });
        chart.coordinate().reflect('x');
        chart.point()
            .position('x*y')
            .color('category')
            .shape('cloud')
            .tooltip('num*category', (num, category) => {
                return {
                    name: category,
                    value: num,
                };
            });
        chart.interaction('element-active');
        chart.render();
    }

    getTextAttrs(cfg) {
        return {
            ...cfg.defaultStyle,
            ...cfg.style,
            fontSize: cfg.data.size,
            text: cfg.data.text,
            textAlign: 'center',
            fontFamily: cfg.mappingData._origin.font,
            fill: cfg.color,
            textBaseline: 'Alphabetic'
        };
    }
}
