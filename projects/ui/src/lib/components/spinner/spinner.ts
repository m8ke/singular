import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "span[sg-spinner],div[sg-spinner]",
    templateUrl: "./spinner.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'spinner'",
    },
})
export class Spinner {}
