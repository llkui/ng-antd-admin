import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-changelog',
    templateUrl: './changelog.component.html'
})

export class ChangelogComponent implements OnInit {
    constructor(
        private router: Router
    ) { }

    ngOnInit() {

    }

    migration(version) {
        this.router.navigate(['./migration/' + version]);
    }
}
