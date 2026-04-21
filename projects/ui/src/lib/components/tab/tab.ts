import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "ul[sg-tab], ol[sg-tab], div[sg-tab], nav[sg-tab], section[sg-tab]",
    templateUrl: "./tab.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'tab'",
    },
})
export class Tab {}
