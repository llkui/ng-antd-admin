import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-register-result',
    templateUrl: './register-result.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserRegisterResultComponent implements OnInit {
    email = 'NgAntdAdmin@example.com';

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        const email = sessionStorage.getItem('email');
        if (email) {
            this.email = email;
        }
    }

    backHome() {
        this.router.navigate(['/']);
    }
}
