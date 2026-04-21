import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "thead[sg-table-header]",
    templateUrl: "./table-header.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'table-header'"
    },
})
export class TableHeader {}
