import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
    selector: 'app-list-basic',
    templateUrl: './basic-list.component.html',
    styleUrls: ['./basic-list.component.scss']
})

export class BasicListComponent implements OnInit {
    status = 'all';
    list = [];
    isSpinning = false;
    isVisible = false;
    validateForm: FormGroup;
    confirmModal?: NzModalRef;
    isVisibleResult = false;

    constructor(
        private fb: FormBuilder,
        private modal: NzModalService
    ) {
        this.validateForm = this.fb.group({
            name: ['', [Validators.required]],
            time: [null, [Validators.required]],
            user: [null, [Validators.required]],
            desc: ['', [Validators.minLength(5)]],
        });
    }

    ngOnInit() {
        this.search();
    }

    search() {
        this.isSpinning = true;
        setTimeout(() => {
            this.list = [
                {
                    id: 1,
                    name: 'Alipay',
                    desc: '那是一种内在的东西， 他们到达不了，也无法触及的',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                    owner: '付小小',
                    owner_id: '1',
                    time: '2020-11-18 15:12',
                    progress: '75',
                    progress_status: 'active'
                },
                {
                    id: 2,
                    name: 'Angular',
                    desc: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                    owner: '曲丽丽',
                    owner_id: '2',
                    time: '2020-11-19 07:51',
                    progress: '93',
                    progress_status: 'exception'
                },
                {
                    id: 3,
                    name: 'Ant Design',
                    desc: '生命就像一盒巧克力，结果往往出人意料',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                    owner: '林东东',
                    owner_id: '3',
                    time: '2020-11-19 05:51',
                    progress: '94',
                    progress_status: 'active'
                },
                {
                    id: 4,
                    name: 'Ant Design Pro',
                    desc: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                    owner: '周星星',
                    owner_id: '4',
                    time: '2020-11-19 03:51',
                    progress: '93',
                    progress_status: 'active'
                },
                {
                    id: 5,
                    name: 'Bootstrap',
                    desc: '那时候我只会想自己想要什么，从不想自己拥有什么',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                    owner: '吴加好',
                    owner_id: '5',
                    time: '2020-11-19 01:51',
                    progress: '91',
                    progress_status: 'exception'
                },
            ];
            this.isSpinning = false;
        }, 1000);
    }

    add() {
        this.isVisible = true;
    }

    edit(item) {
        this.validateForm.controls.name.reset(item.name);
        this.validateForm.controls.time.reset(new Date(item.time));
        this.validateForm.controls.user.reset(item.owner_id);
        this.validateForm.controls.desc.reset(item.desc);
        this.isVisible = true;
    }

    deleteItem() {
        this.confirmModal = this.modal.confirm({
            nzTitle: '删除任务',
            nzContent: '确定删除该任务吗？',
            nzOnOk: () => {
                this.search();
            }
        });
    }

    handleCancel() {
        this.validateForm.controls.name.reset('');
        this.validateForm.controls.time.reset(null);
        this.validateForm.controls.user.reset(null);
        this.validateForm.controls.desc.reset('');
        this.isVisible = false;
    }

    handleOk() {
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.invalid) {
            return;
        }
        this.isVisible = false;
        this.isVisibleResult = true;
        this.search();
    }

    cancelResult() {
        this.isVisibleResult = false;
        this.handleCancel();
    }

    okResult() {
        this.isVisibleResult = false;
        this.handleCancel();
    }
}
