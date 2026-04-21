import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "label[sg-label]",
    templateUrl: "./label.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'label'",
    },
})
export class Label {}
