import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "td[sg-table-cell]",
    templateUrl: "./table-cell.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'table-cell'",
    },
})
export class TableCell {}
