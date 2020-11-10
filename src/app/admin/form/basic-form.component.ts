import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-basic-form',
    templateUrl: './basic-form.component.html',
    styleUrls: ['./basic-form.component.scss']
})

export class BasicFormComponent implements OnInit {
    validateForm: FormGroup;
    peopleList = [
        { id: 1, name: '同事甲' },
        { id: 2, name: '同事乙' },
        { id: 3, name: '同事丙' }
    ];
    isSpinning = false;

    constructor(
        private fb: FormBuilder,
        private message: NzMessageService
    ) {
        this.validateForm = this.fb.group({
            title: [null, [Validators.required]],
            date: [null, [Validators.required]],
            describe: [null, [Validators.required]],
            standard: [null, [Validators.required]],
            customer: [null],
            invite: [null],
            proportion: [null],
            target_status: [null],
            target_people: [null]
        });
    }

    ngOnInit() {

    }

    submitForm(): void {
        this.isSpinning = true;
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.invalid) {
            this.isSpinning = false;
            return;
        }
        setTimeout(() => {
            this.isSpinning = false;
            this.message.success('提交成功');
        }, 1000);
    }
}
