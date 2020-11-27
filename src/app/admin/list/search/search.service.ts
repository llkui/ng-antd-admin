import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService {
    searchType = new Subject<string>();

    changeSearchType(type) {
        this.searchType.next(type);
    }
}
