import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "[sg-dropdown-divider]",
    templateUrl: "./dropdown-divider.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        "role": "separator",
        "aria-orientation": "horizontal",
        "[class]": "'dropdown-divider'",
    },
})
export class DropdownDivider {}
