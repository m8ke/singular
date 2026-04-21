import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "[sg-helper]",
    templateUrl: "./helper.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'helper'",
    },
})
export class Helper {}
