import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "tr[sg-table-row]",
    templateUrl: "./table-row.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'table-row'"
    },
})
export class TableRow {}
