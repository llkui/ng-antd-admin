import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss']
})

export class BasicProfileComponent implements OnInit {
    isSpinningGood = false;
    listOfGood = [];
    goodInfo = {
        total_num: 0,
        total_amount: 0,
    };
    isSpinningProgress = false;
    listOfProgress = [];

    constructor() { }

    ngOnInit() {
        this.getGoodList();
        this.getProgressList();
    }

    getGoodList() {
        this.isSpinningGood = true;
        setTimeout(() => {
            this.listOfGood = [
                { id: '1234561', name: '矿泉水 550ml', barcode: '12421432143214321', price: '2.00', num: '1', amount: '2.00' },
                { id: '1234562', name: '凉茶 300ml', barcode: '12421432143214322', price: '3.00', num: '2', amount: '6.00' },
                { id: '1234563', name: '好吃的薯片', barcode: '12421432143214323', price: '7.00	', num: '4', amount: '28.00' },
                { id: '1234564', name: '特别好吃的蛋卷', barcode: '	12421432143214324', price: '8.50', num: '3', amount: '25.50' },
            ];
            this.listOfGood.forEach(item => {
                this.goodInfo.total_num += Number(item.num);
                this.goodInfo.total_amount += Number(item.amount);
            });

            this.isSpinningGood = false;
        }, 400);
    }

    getProgressList() {
        this.isSpinningGood = true;
        setTimeout(() => {
            this.listOfProgress = [
                { id: 1, time: '2017-10-01 14:10', rate: '联系客户', status: 'processing', operator: '取货员 ID1234', cost: '5mins' },
                { id: 2, time: '2017-10-01 14:05', rate: '取货员出发', status: 'success', operator: '取货员 ID1234', cost: '1h' },
                { id: 3, time: '2017-10-01 13:05', rate: '取货员接单', status: 'success', operator: '取货员 ID1234', cost: '5mins' },
                { id: 4, time: '2017-10-01 13:00', rate: '申请审批通过', status: 'success', operator: '系统', cost: '1h' },
                { id: 5, time: '2017-10-01 12:00', rate: '发起退货申请', status: 'success', operator: '用户', cost: '5mins' },
            ];

            this.isSpinningGood = false;
        }, 600);
    }
}
