import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "nav[docs-sidebar]",
    styleUrl: "./sidebar.css",
    templateUrl: "./sidebar.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'sidebar'",
    },
})
export class Sidebar {}
