import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "header[sg-accordion-header], div[sg-accordion-header], section[sg-accordion-header]",
    templateUrl: "./accordion-header.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'accordion-header'",
    },
})
export class AccordionHeader {}
