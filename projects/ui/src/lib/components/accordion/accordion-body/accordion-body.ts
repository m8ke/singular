import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "div[sg-accordion-body],section[sg-accordion-body],p[sg-accordion-body]",
    templateUrl: "./accordion-body.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'accordion-body'"
    }
})
export class AccordionBody {}
