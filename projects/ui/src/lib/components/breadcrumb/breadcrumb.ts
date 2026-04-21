import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "ul[sg-breadcrumb], ol[sg-breadcrumb], div[sg-breadcrumb], nav[sg-breadcrumb], section[sg-breadcrumb]",
    templateUrl: "./breadcrumb.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'breadcrumb'",
    },
})
export class Breadcrumb {}
