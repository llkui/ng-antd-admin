import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
    selector: 'app-list-table',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.scss']
})

export class TableListComponent implements OnInit {
    searchInfo = {
        name: '',
        desc: '',
        num: '',
        status: null,
        time: null
    };
    showInfo = {
        name: true,
        desc: true,
        num: true,
        status: false,
        time: false
    };
    searchSpan = 6;
    expandedOffset = 0;
    expanded = false;
    windosResize$ = fromEvent(window, 'resize');
    @ViewChild('searchElement', { static: false }) searchElement: ElementRef;
    list = [];
    hasData = false;
    sortList = [];
    sortNum = false;
    sortTime = false;
    listOfData = [];
    isSpinning = false;
    tableSize = 'middle';
    current = 1;
    total = 0;
    pageSize = 20;
    pagination = '第 1-20 条';
    indeterminate = false;
    checked = false;
    setOfCheckedId = new Set<number>();
    thOfData = [
        { id: 1, key: 'name', value: '规则名称', checked: true },
        { id: 2, key: 'desc', value: '描述', checked: true },
        { id: 3, key: 'num', value: '服务调用次数', checked: true },
        { id: 4, key: 'status', value: '状态', checked: true },
        { id: 5, key: 'time', value: '上次调度时间', checked: true },
        { id: 6, key: 'edit', value: '操作', checked: true },
    ];
    indeterminateTh = false;
    checkedTh = true;
    setOfThCheckedId = new Set<number>([1, 2, 3, 4, 5, 6]);
    changeTh = false;
    isVisibleAdd = false;
    isSpinningAdd = false;
    validateForm: FormGroup;
    isVisibleSetup = false;
    stepCurrent = 0;
    isSpinningSetup = false;
    // 选中操作
    selectedInfo = {
        ids: [],
        num: 0
    };
    // 侧边抽屉
    visibleDrawer = false;
    selectedItem = null;
    // 用于处理因为drawer存在，导致card渲染时的样式异常（黑色边框）
    laterShow = false;

    constructor(
        private fb: FormBuilder,
        private message: NzMessageService
    ) {
        this.validateForm = this.fb.group({
            name: ['', Validators.required],
            desc: [''],
            object: [null, Validators.required],
            template: [null, Validators.required],
            type: [null, Validators.required],
            start_date: [null, Validators.required],
            cycle: [null, Validators.required]
        });
    }

    ngOnInit() {
        this.windosResize$.pipe(debounceTime(100)).subscribe(() => {
            const width = this.searchElement.nativeElement.offsetWidth;
            if (width > 1350) {
                this.searchSpan = 6;
            } else if (width > 700) {
                this.searchSpan = 8;
            } else {
                this.searchSpan = 12;
            }
            if (!this.expanded) {
                this.changeShow();
            }
        });

        this.list = [];
        for (let i = 0; i < 100; i++) {
            this.list.push({
                id: i + 1,
                name: 'TradeCode ' + (i + 1),
                desc: '这是一段描述',
                num: Math.floor(Math.random() * (1000 - 1)) + 1,
                status: Math.floor(Math.random() * (4 - 0)) + 0,
                time: '2020-11-16 11:55:17',
                disabled: false
            });
        }
        this.hasData = true;

        setTimeout(() => {
            this.laterShow = true;
        }, 1000);
    }

    changeShow() {
        switch (this.searchSpan) {
            case 6:
                this.showInfo = {
                    name: true,
                    desc: true,
                    num: true,
                    status: false,
                    time: false
                };
                break;
            case 8:
                this.showInfo = {
                    name: true,
                    desc: true,
                    num: false,
                    status: false,
                    time: false
                };
                break;
            case 12:
                this.showInfo = {
                    name: true,
                    desc: false,
                    num: false,
                    status: false,
                    time: false
                };
                break;
        }
    }

    changeOffset() {
        switch (this.searchSpan) {
            case 6:
                this.expandedOffset = 12;
                break;
            case 8:
                this.expandedOffset = 0;
                break;
            case 12:
                this.expandedOffset = 0;
                break;
        }
    }

    changeExpanded() {
        this.expanded = !this.expanded;
        if (!this.expanded) {
            this.changeShow();
            this.expandedOffset = 0;
        } else {
            this.showInfo = {
                name: true,
                desc: true,
                num: true,
                status: true,
                time: true
            };
            this.changeOffset();
        }
    }

    reset() {
        this.searchInfo = {
            name: '',
            desc: '',
            num: '',
            status: null,
            time: null
        };
        this.search();
    }

    updateCheckedSet(id: number, checked: boolean): void {
        if (checked) {
            this.setOfCheckedId.add(id);
        } else {
            this.setOfCheckedId.delete(id);
        }
        const idList = [];
        let totalNum = 0;
        for (const key of this.setOfCheckedId.keys()) {
            idList.push(key);
            const itemInfo = this.listOfData.find(item => item.id === key);
            totalNum += itemInfo.num;
        }
        this.selectedInfo = {
            ids: idList,
            num: totalNum
        };
    }

    onAllChecked(checked: boolean): void {
        this.listOfData.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }

    onItemChecked(id: number, checked: boolean): void {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.listOfData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }

    removeSelect() {
        this.onAllChecked(false);
    }

    deleteSelected() {
        const loadingRef = this.message.loading('正在删除', { nzDuration: 0 });
        setTimeout(() => {
            this.removeSelect();
            this.message.remove(loadingRef.messageId);
            this.message.success('删除成功，即将刷新');
            this.search();
        }, 1000);
    }

    pageChange() {
        this.search();
    }

    pageSizeChange() {
        this.current = 1;
        // pageSize变更触发了nzQueryParams，不用再次调用search()
        // this.search();
    }

    search() {
        this.isSpinning = true;
        this.total = this.sortList.length;
        const limit = (this.current - 1) * this.pageSize;
        const offset = (this.current * this.pageSize) < this.total ? (this.current * this.pageSize) : this.total;
        const list = [];
        for (let i = limit; i < offset; i++) {
            list.push(this.sortList[i]);
        }
        setTimeout(() => {
            this.pagination = `第 ${limit + 1}-${offset} 条`;
            this.listOfData = list;
            this.isSpinning = false;
        }, 1000);
    }

    refresh() {
        this.search();
    }

    add() {
        this.validateForm.controls.name.reset('');
        this.validateForm.controls.desc.reset('');
        this.validateForm.controls.desc.setValidators(null);
        this.isVisibleAdd = true;
    }

    handleCancel() {
        this.isVisibleAdd = false;
    }

    resetAdd() {
        this.validateForm.reset();
    }

    confirmAdd() {
        this.isSpinningAdd = true;
        for (const i of ['name', 'desc']) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.controls.name.invalid || this.validateForm.controls.desc.invalid) {
            this.isSpinningAdd = false;
            return;
        }
        const loadingRef = this.message.loading('正在添加', { nzDuration: 0 });
        setTimeout(() => {
            this.message.remove(loadingRef.messageId);
            this.message.success('添加成功');
            this.handleCancel();
            this.isSpinningAdd = false;
            this.search();
        }, 1000);
    }

    setup(info) {
        this.validateForm.controls.name.reset(info.name);
        this.validateForm.controls.desc.reset(info.desc);
        this.validateForm.controls.desc.setValidators([Validators.required, Validators.minLength(5)]);
        this.validateForm.controls.object.reset('1');
        this.validateForm.controls.template.reset('1');
        this.validateForm.controls.type.reset('-1');
        this.validateForm.controls.start_date.reset(null);
        this.validateForm.controls.cycle.reset('month');
        this.isVisibleSetup = true;
    }

    handleCancelSetup() {
        this.isVisibleSetup = false;
    }

    previous() {
        this.stepCurrent -= 1;
    }

    next() {
        if (this.stepCurrent === 0) {
            for (const i of ['name', 'desc']) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
            if (this.validateForm.controls.name.invalid || this.validateForm.controls.desc.invalid) {
                return;
            }
            this.stepCurrent = 1;
        } else if (this.stepCurrent === 1) {
            for (const i of ['object', 'template', 'type']) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
            if (this.validateForm.controls.object.invalid || this.validateForm.controls.template.invalid
                || this.validateForm.controls.type.invalid) {
                return;
            }
            this.stepCurrent = 2;
        } else {
            this.isSpinningSetup = true;
            for (const i of ['start_date', 'cycle']) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
            if (this.validateForm.controls.start_date.invalid || this.validateForm.controls.cycle.invalid) {
                this.isSpinningSetup = false;
                return;
            }

            const loadingRef = this.message.loading('正在配置', { nzDuration: 0 });
            setTimeout(() => {
                this.message.remove(loadingRef.messageId);
                this.message.success('配置成功');
                this.handleCancelSetup();
                this.isSpinningSetup = false;
                this.search();
            }, 1000);
        }
    }

    onQueryParamsChange(params: NzTableQueryParams): void {
        if (!this.changeTh) {
            // 服务器端排序
            const { sort } = params;
            const sortNum = sort.find(item => item.key === 'num' && item.value !== null);
            const sortTime = sort.find(item => item.key === 'time' && item.value !== null);
            this.isSpinning = true;
            setTimeout(() => {
                const list = Object.assign([], this.list);
                if (sortNum) {
                    this.sortNum = true;
                    if (sortNum.value === 'ascend') {
                        list.sort((a: any, b: any) => {
                            return a.num - b.num;
                        });
                    } else if (sortNum.value === 'descend') {
                        list.sort((a: any, b: any) => {
                            return b.num - a.num;
                        });
                    }
                } else {
                    this.sortNum = false;
                }
                if (sortTime) {
                    this.sortTime = true;
                    if (sortTime.value === 'ascend') {
                        list.sort((a: any, b: any) => {
                            return a.time - b.time;
                        });
                    } else if (sortTime.value === 'descend') {
                        list.sort((a: any, b: any) => {
                            return b.time - a.time;
                        });
                    }
                } else {
                    this.sortTime = false;
                }
                this.sortList = list;
                this.search();
            }, 1000);
        } else {
            this.changeTh = false;
        }
    }

    updateThCheckedSet(id: number, checked: boolean): void {
        if (checked) {
            this.setOfThCheckedId.add(id);
        } else {
            this.setOfThCheckedId.delete(id);
        }
        this.thOfData.forEach(item => {
            item.checked = this.setOfThCheckedId.has(item.id);
        });
    }

    onAllThChecked(checked: boolean): void {
        this.changeTh = true;
        this.thOfData.forEach(({ id }) => this.updateThCheckedSet(id, checked));
        this.refreshThCheckedStatus();
    }

    onItemThChecked(id: number, checked: boolean): void {
        this.changeTh = true;
        this.updateThCheckedSet(id, checked);
        this.refreshThCheckedStatus();
    }

    refreshThCheckedStatus(): void {
        this.checkedTh = this.thOfData.every(({ id }) => this.setOfThCheckedId.has(id));
        this.indeterminateTh = this.thOfData.some(({ id }) => this.setOfThCheckedId.has(id)) && !this.checkedTh;
    }

    resetTh() {
        this.onAllThChecked(true);
    }

    drop(event: CdkDragDrop<string[]>) {
        this.changeTh = true;
        moveItemInArray(this.thOfData, event.previousIndex, event.currentIndex);
    }

    showItem(item) {
        this.selectedItem = item;
        this.visibleDrawer = true;
    }

    closeDrawer() {
        this.selectedItem = null;
        this.visibleDrawer = false;
    }
}
