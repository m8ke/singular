import { Directive, inject } from "@angular/core";
import { DropdownNodeService } from "../dropdown-node/dropdown-node-service";

@Directive({
    selector: "[sg-dropdown-trigger]",
    host: {
        tabindex: "0",
        "[attr.aria-haspopup]": "'menu'",
        "[attr.aria-expanded]": "node.open()",
        "(click)": "onClick($event)",
        "(keydown.enter)": "onClick($event)",
        "(keydown.space)": "onSpace($event)",
    },
})
export class DropdownTrigger {
    protected readonly node = inject(DropdownNodeService);

    public onClick(event: Event): void {
        event.stopPropagation();
        this.node.toggle();
    }

    public onSpace(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        this.node.toggle();
    }
}
