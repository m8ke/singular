import { Component, HostListener, inject, input, ViewEncapsulation } from "@angular/core";
import { Dropdown } from "../dropdown";

@Component({
    selector: "[sg-dropdown-item]",
    templateUrl: "./dropdown-item.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'dropdown-item'",
    },
})
export class DropdownItem {
    public readonly closeOnAction = input<boolean>(false);
    private readonly dropdown = inject(Dropdown, { optional: true });

    @HostListener("click")
    protected onClick(): void {
        if (this.closeOnAction() && this.dropdown) {
            this.dropdown.close();
        }
    }
}
