import { Directive, ElementRef } from '@angular/core';

import { ResultService } from '../shared/result.service';

@Directive({
    selector: '[instructionsDirective]'
})
export class InstructionsDirective {
    constructor(private element: ElementRef, private resultService: ResultService) {
        this.element.nativeElement.innerHtml = this.resultService.regularization + '<br><br>' + this.resultService.process;
    }

}