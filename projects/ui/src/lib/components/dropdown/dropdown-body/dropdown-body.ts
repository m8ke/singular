import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "[sg-dropdown-body]",
    templateUrl: "./dropdown-body.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        "[class]": "'dropdown-body'",
    },
})
export class DropdownBody {}
