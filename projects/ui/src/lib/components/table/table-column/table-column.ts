import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "th[sg-table-column], th.table-column",
    templateUrl: "./table-column.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'table-column'"
    },
})
export class TableColumn {}
