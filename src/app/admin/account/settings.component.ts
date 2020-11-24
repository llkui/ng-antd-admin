import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-account-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsAccountComponent implements OnInit {
    selectedIndex = 0;
    validateForm: FormGroup;
    provinceData = [
        { id: 1, name: '北京市' },
        { id: 2, name: '上海市' },
        { id: 3, name: '广东省' },
    ];
    cityData = [
        {
            province_id: 1,
            cityList: [
                { id: 101, name: '市辖区' }
            ]
        },
        {
            province_id: 2,
            cityList: [
                { id: 201, name: '市辖区' }
            ]
        },
        {
            province_id: 3,
            cityList: [
                { id: 301, name: '广州市' },
                { id: 302, name: '韶关市' },
                { id: 303, name: '深圳市' },
                { id: 304, name: '珠海市' },
                { id: 305, name: '汕头市' },
                { id: 306, name: '佛山市' },
                { id: 307, name: '江门市' },
                { id: 308, name: '湛江市' },
                { id: 309, name: '茂名市' },
                { id: 310, name: '肇庆市' },
                { id: 311, name: '惠州市' },
                { id: 312, name: '梅州市' },
                { id: 313, name: '汕尾市' },
                { id: 314, name: '河源市' },
                { id: 315, name: '阳江市' },
                { id: 316, name: '清远市' },
                { id: 317, name: '东莞市' },
                { id: 318, name: '中山市' },
                { id: 319, name: '潮州市' },
                { id: 320, name: '揭阳市' },
                { id: 321, name: '云浮市' },
            ]
        },
    ];
    cityList = [];

    constructor(
        private fb: FormBuilder
    ) {
        this.validateForm = this.fb.group({
            email: ['antdesign@alipay.com', [Validators.required]],
            nickname: ['Serati Ma', [Validators.required]],
            desc: ['', [Validators.required]],
            country: ['China', [Validators.required]],
            province: [1, [Validators.required]],
            city: [101, [Validators.required]],
            address: ['天安门', [Validators.required]],
            areacode: ['0752', [Validators.required]],
            phone: ['268888888', [Validators.required]],
        });
    }

    ngOnInit() {
        this.cityList = this.cityData[0].cityList;
    }

    changeMenu($event) {
        this.selectedIndex = $event;
    }

    provinceChange($event) {
        this.cityList = this.cityData.find(item => item.province_id === $event).cityList;
        this.validateForm.controls.city.setValue(null);
        this.validateForm.controls.city.markAsDirty();
        this.validateForm.controls.city.updateValueAndValidity();
    }

    save() {
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.invalid) {
            return;
        }
    }

    handleChange($event) {
        console.log($event);
    }
}
