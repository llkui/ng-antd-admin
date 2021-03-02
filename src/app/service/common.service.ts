import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommonService {
    // 页面布局变化
    layout = new Subject<any>();

    changeLayout() {
        this.layout.next();
    }
}
