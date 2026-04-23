import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "[sg-dropdown-divider]",
    templateUrl: "./dropdown-divider.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        "[class]": "'dropdown-divider'",
        role: "separator",
        "aria-orientation": "horizontal",
    },
})
export class DropdownDivider {}
