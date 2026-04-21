import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "tbody[sg-table-content]",
    templateUrl: "./table-body.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'table-body'",
    },
})
export class TableBody {}
