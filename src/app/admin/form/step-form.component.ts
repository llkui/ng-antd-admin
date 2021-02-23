import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-step-form',
    templateUrl: './step-form.component.html',
    styleUrls: ['./step-form.component.scss']
})

export class StepFormComponent implements OnInit {
    currentIndex = 0;
    validateForm: FormGroup;
    validateForm2: FormGroup;
    isSpinning = false;

    constructor(
        private fb: FormBuilder
    ) {
        this.validateForm = this.fb.group({
            payment_account: ['ng-antd-admin', [Validators.required]],
            collection_type: ['alipay', [Validators.required]],
            collection_account: ['test@example.com', [Validators.required, Validators.email]],
            collection_name: ['Alex', [Validators.required]],
            account: ['500', [Validators.required, this.matchNumber]],
        });
        this.validateForm2 = this.fb.group({
            password: ['ng-antd-admin', [Validators.required]],
        });
    }

    ngOnInit() {

    }

    matchNumber = (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value && !control.value.match(/^[0-9]+(.[0-9]+)?$/)) {
            return { matchNumber: true };
        }
        return null;
    }

    nextStep(): void {
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.invalid) {
            return;
        }

        this.currentIndex = 1;
    }

    submitForm() {
        this.isSpinning = true;
        for (const i in this.validateForm2.controls) {
            if (i) {
                this.validateForm2.controls[i].markAsDirty();
                this.validateForm2.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm2.invalid) {
            this.isSpinning = false;
            return;
        }

        setTimeout(() => {
            this.isSpinning = false;
            this.currentIndex = 2;
        }, 1000);
    }

    backStep() {
        this.currentIndex = 0;
    }

    again() {
        this.currentIndex = 0;
    }
}
