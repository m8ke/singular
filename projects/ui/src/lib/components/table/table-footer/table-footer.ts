import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "footer[sg-table-footer], div[sg-table-footer], section[sg-table-footer]",
    templateUrl: "./table-footer.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'table-footer'"
    }
})
export class TableFooter {}
