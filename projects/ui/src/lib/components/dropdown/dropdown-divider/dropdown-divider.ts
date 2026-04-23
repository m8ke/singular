import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "[sg-dropdown-divider]",
    templateUrl: "./dropdown-divider.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'dropdown-divider'",
    },
})
export class DropdownDivider {}
