import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "div[sg-accordion-content],section[sg-accordion-content],p[sg-accordion-content]",
    templateUrl: "./accordion-content.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'accordion-content'"
    }
})
export class AccordionContent {}
