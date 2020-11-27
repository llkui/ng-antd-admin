import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';

@Component({
    selector: 'app-list-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
    typeName = '';

    constructor(
        private searchS: SearchService
    ) {
        this.searchS.searchType.subscribe(type => {
            switch (type) {
                case 'article':
                    this.typeName = '搜索列表（文章）';
                    break;
                case 'projects':
                    this.typeName = '搜索列表（项目）';
                    break;
                case 'applications':
                    this.typeName = '搜索列表（应用）';
                    break;
            }
        });
    }

    ngOnInit() {

    }
}
