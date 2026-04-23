import { Directive, ElementRef, inject } from "@angular/core";
import { Dropdown } from "../dropdown";

@Directive({
    selector: "[dropdown-trigger]",
})
export class DropdownTrigger {
    private readonly dropdown = inject(Dropdown);
    private readonly element = inject(ElementRef<HTMLElement>);

    public constructor() {
        this.element.nativeElement.setAttribute("popovertarget", this.dropdown.id());
    }
}
