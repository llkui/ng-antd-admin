import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { CommonService } from '../../service/common.service';

@Component({
    selector: 'app-watermark',
    templateUrl: './watermark.component.html',
    styleUrls: ['./watermark.component.scss']
})

export class WatermarkComponent implements AfterViewInit {
    @ViewChild('watermark', { static: false }) watermark: ElementRef;

    constructor(
        private commonS: CommonService
    ) { }

    ngAfterViewInit() {
        const watermarkImg = this.commonS.getWatermark();
        this.watermark.nativeElement.style.backgroundImage = `url(${watermarkImg})`;
    }
}
