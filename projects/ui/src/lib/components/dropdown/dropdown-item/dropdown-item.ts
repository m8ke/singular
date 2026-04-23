import { booleanAttribute, ChangeDetectionStrategy, Component, input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "[sg-dropdown-item]",
    templateUrl: "./dropdown-item.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        role: "menuitem",
        "[tabindex]": "0",
        "[class]": "'dropdown-item'",
        "(click)": "onItemClick($event)",
    },
})
export class DropdownItem {
    public readonly closeOnSelect = input<boolean, boolean | string>(true, { transform: booleanAttribute });

    public onItemClick(event: MouseEvent): void {
        if (!this.closeOnSelect()) {
            event.stopPropagation();
        }
    }
}
