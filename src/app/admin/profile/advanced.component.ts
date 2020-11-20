import { Component, OnInit } from '@angular/core';

import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';

@Component({
    selector: 'app-profile-advanced',
    templateUrl: './advanced.component.html',
    styleUrls: ['./advanced.component.scss']
})

export class AdvancedProfileComponent implements OnInit {
    list = {
        first: [],
        second: [],
        third: []
    };
    listOfData = [];

    constructor() { }

    ngOnInit() {
        this.list = {
            first: [
                { id: 1, type: '订购关系生效', operate: '曲丽丽', result: 'agree', time: '2017-10-03 19:23:12', remark: '-' },
                { id: 2, type: '财务复审', operate: '付小小', result: 'reject', time: '2017-10-03 19:23:12', remark: '不通过原因' },
                { id: 3, type: '部门初审', operate: '周毛毛', result: 'agree', time: '2017-10-03 19:23:12', remark: '-' },
                { id: 4, type: '提交订单', operate: '林东东', result: 'agree', time: '2017-10-03 19:23:12', remark: '很棒' },
                { id: 5, type: '创建订单', operate: '汗牙牙', result: 'agree', time: '2017-10-03 19:23:12', remark: '-' },
            ],
            second: [
                { id: 1, type: '订购关系生效', operate: '曲丽丽', result: 'agree', time: '2017-10-03 19:23:12', remark: '-' },
            ],
            third: [
                { id: 1, type: '创建订单', operate: '汗牙牙', result: 'agree', time: '2017-10-03 19:23:12', remark: '-' },
            ]
        };
        this.listOfData = Object.assign([], this.list.first);
    }

    typeChange($event: NzTabChangeEvent) {
        if ($event.index === 0) {
            this.listOfData = Object.assign([], this.list.first);
        } else if ($event.index === 1) {
            this.listOfData = Object.assign([], this.list.second);
        } else {
            this.listOfData = Object.assign([], this.list.third);
        }
    }
}
