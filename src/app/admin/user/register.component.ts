import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-register',
    templateUrl: './register.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserRegisterComponent implements OnInit {
    validateForm: FormGroup;
    passwordInfo = {
        hasData: false,
        type: 1,
        percent: 0,
        color: '#ff4d4f'
    };
    loginError = false;
    isSpinning = false;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
        this.validateForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            checkPassword: ['', [Validators.required, this.confirmationValidator]],
            type: ['86', [Validators.required]],
            mobile: ['', [Validators.required, this.matchMobile]],
            mail: ['', [Validators.required]],
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

    confirmationValidator = (control: FormControl): { [key: string]: boolean } | null => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.validateForm.controls.password.value) {
            return { confirm: true };
        }
        return null;
    }

    changePassword($event) {
        const len = $event.target.value.length;
        if (len === 0) {
            this.passwordInfo = {
                hasData: false,
                type: 0,
                percent: 0,
                color: null
            };
        } else if (len < 6) {
            this.passwordInfo = {
                hasData: true,
                type: 1,
                percent: len * 10,
                color: '#ff4d4f'
            };
        } else if (len < 10) {
            this.passwordInfo = {
                hasData: true,
                type: 2,
                percent: len * 10,
                color: '#faad14'
            };
        } else {
            this.passwordInfo = {
                hasData: true,
                type: 3,
                percent: len * 10,
                color: '#52c41a'
            };
        }
    }

    submitForm() {
        this.isSpinning = true;
        this.loginError = false;
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
            sessionStorage.setItem('email', this.validateForm.controls.email.value);
            this.router.navigate(['/user/register-result']);
        }, 1000);
    }

    goLogin() {
        this.router.navigate(['/user/login']);
    }
}
