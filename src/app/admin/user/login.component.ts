import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-user-login',
    templateUrl: './login.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserLoginComponent implements OnInit {
    validateForm: FormGroup;
    isSpinning = false;
    loginError = false;
    selectedIndex = 0;
    mobileLoginError = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private message: NzMessageService
    ) {
        this.validateForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
            mobile: ['', [Validators.required, this.matchMobile]],
            mail: ['', [Validators.required]],
            remember: [true]
        });
    }

    ngOnInit() {

    }

    matchMobile = (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value && !control.value.match(/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/)) {
            return { matchMobile: true };
        }
        return null;
    }

    selectedChange($event) {
        if ($event === 0) {
            const username = this.validateForm.controls.username.value;
            const password = this.validateForm.controls.password.value;
            this.validateForm.controls.username.reset(username);
            this.validateForm.controls.password.reset(password);
        } else {
            const mobile = this.validateForm.controls.mobile.value;
            const mail = this.validateForm.controls.mail.value;
            this.validateForm.controls.mobile.reset(mobile);
            this.validateForm.controls.mail.reset(mail);
        }
    }

    submitForm() {
        this.isSpinning = true;
        this.loginError = false;
        for (const i of ['username', 'password']) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.controls.username.invalid || this.validateForm.controls.password.invalid) {
            this.isSpinning = false;
            return;
        }

        setTimeout(() => {
            const username = this.validateForm.controls.username.value;
            const password = this.validateForm.controls.password.value;
            if (['admin', 'user'].indexOf(username) !== -1 && 'ng.antd.admin' === password) {
                this.router.navigate(['/']);
                this.message.success('登录成功');
            } else {
                this.loginError = true;
                this.isSpinning = false;
            }
        }, 1000);
    }

    submitFormMobile() {
        this.isSpinning = true;
        this.mobileLoginError = false;
        for (const i of ['mobile', 'mail']) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (this.validateForm.controls.mobile.invalid || this.validateForm.controls.mail.invalid) {
            this.isSpinning = false;
            return;
        }

        this.login();
    }

    login() {
        setTimeout(() => {
            const mail = this.validateForm.controls.mail.value;
            if (mail === '123456') {
                this.router.navigate(['/']);
                this.message.success('登录成功');
            } else {
                this.mobileLoginError = true;
                this.isSpinning = false;
            }
        }, 1000);
    }

    goRegister() {
        this.router.navigate(['/user/register']);
    }
}
