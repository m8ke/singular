import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "div[sg-table], section[sg-table], div.table, section.table",
    templateUrl: "./table.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'table'"
    },
})
export class Table {}
