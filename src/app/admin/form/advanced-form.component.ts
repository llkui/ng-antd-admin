import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';
import { DOCUMENT } from '@angular/common';

interface ItemData {
    id: string;
    name: string;
    job_number: string;
    department: string;
}

@Component({
    selector: 'app-advanced-form',
    templateUrl: './advanced-form.component.html',
    styleUrls: ['./advanced-form.component.scss']
})

export class AdvancedFormComponent implements OnInit {
    validateForm: FormGroup;
    listOfData = [];
    editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
    idNumber = 3;
    isSpinning = false;
    keyData = [];
    errorData = [];
    doc: Document;
    contentDom: Element = null;

    constructor(
        private fb: FormBuilder,
        private message: NzMessageService,
        @Inject(DOCUMENT) doc: any
    ) {
        this.validateForm = this.fb.group({
            warehouse_name: [null, [Validators.required]],
            warehouse_domain: [null, [Validators.required]],
            warehouse_admin: [null, [Validators.required]],
            warehouse_approval: [null, [Validators.required]],
            warehouse_start_date: [null, [Validators.required]],
            warehouse_type: [null, [Validators.required]],
            task_name: [null, [Validators.required]],
            task_desc: [null, [Validators.required]],
            task_admin: [null, [Validators.required]],
            task_approval: [null, [Validators.required]],
            task_start_date: [null, [Validators.required]],
            task_type: [null, [Validators.required]]
        });
        this.doc = doc;
        this.contentDom = this.doc.querySelector('html');
    }

    ngOnInit() {
        this.listOfData = [
            { id: '1', name: 'John Brown', job_number: '00001', department: 'New York No. 1 Lake Park' },
            { id: '2', name: 'Jim Green', job_number: '00002', department: 'London No. 1 Lake Park' },
            { id: '3', name: 'Joe Black', job_number: '00003', department: 'Sidney No. 1 Lake Park' },
        ];
        this.updateEditCache();
        this.keyData = [
            { key: 'warehouse_name', name: '仓库名', placeholder: '请输入仓库名' },
            { key: 'warehouse_domain', name: '仓库域名', placeholder: '请输入' },
            { key: 'warehouse_admin', name: '仓库管理员', placeholder: '请选择仓库管理员' },
            { key: 'warehouse_approval', name: '审批人', placeholder: '请选择审批员' },
            { key: 'warehouse_start_date', name: '生效日期', placeholder: '请选择生效日期' },
            { key: 'warehouse_type', name: '仓库类型', placeholder: '请选择仓库类型' },
            { key: 'task_name', name: '任务名', placeholder: '请输入' },
            { key: 'task_desc', name: '任务描述', placeholder: '请输入' },
            { key: 'task_admin', name: '执行人', placeholder: '请选择管理员' },
            { key: 'task_approval', name: '责任人', placeholder: '请选择审批员' },
            { key: 'task_start_date', name: '生效日期', placeholder: '请选择生效日期' },
            { key: 'task_type', name: '任务类型', placeholder: '请选择任务类型' },
        ];
    }

    startEdit(id: string): void {
        this.editCache[id].edit = true;
    }

    cancelEdit(id: string): void {
        const index = this.listOfData.findIndex(item => item.id === id);
        this.editCache[id] = {
            data: { ...this.listOfData[index] },
            edit: false
        };
    }

    saveEdit(id: string): void {
        this.isSpinning = true;

        setTimeout(() => {
            if (this.editCache[id].data.name.trim() === ''
                || this.editCache[id].data.job_number.trim() === ''
                || this.editCache[id].data.department.trim() === '') {
                this.message.error('请填写完整成员信息。');
                this.isSpinning = false;
                return;
            }

            const index = this.listOfData.findIndex(item => item.id === id);
            Object.assign(this.listOfData[index], this.editCache[id].data);
            this.editCache[id].edit = false;
            this.isSpinning = false;
        }, 1000);
    }

    updateEditCache(): void {
        this.listOfData.forEach(item => {
            this.editCache[item.id] = {
                edit: false,
                data: { ...item }
            };
        });
    }

    deleteItem(id: string): void {
        const index = this.listOfData.findIndex(item => item.id === id);
        this.listOfData.splice(index, 1);
        this.listOfData = Object.assign([], this.listOfData);
    }

    addItem() {
        this.idNumber++;
        const item: ItemData = {
            id: this.idNumber.toString(),
            name: '',
            job_number: '',
            department: ''
        };
        this.listOfData = [...this.listOfData, item];
        this.editCache[item.id] = {
            edit: true,
            data: { ...item }
        };
    }

    save() {
        this.isSpinning = true;
        this.errorData = [];
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
                if (this.validateForm.controls[i].invalid) {
                    const keyItem = this.keyData.find(item => item.key === i);
                    this.errorData.push(keyItem);
                }
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

    goErrorItem(item) {
        this.doc.querySelector(`.${item.key}_item`).scrollIntoView();
    }
}
