import { Component, Input, OnChanges } from '@angular/core';

import { ResultService } from '../shared/result.service';



@Component({
    selector: 'instructions',
    template: `<div [innerHtml]="resultService.regularization"></div>`
    // template: `<div>{{resultService.regularization}}</div>`
})
export class Instructions implements OnChanges{
    @Input() trigger: number;

    constructor(private resultService: ResultService){

    }

    ngOnChanges(){
        if(this.trigger < 0){
            return;
        }
        this.resultService.getData();
    }
}