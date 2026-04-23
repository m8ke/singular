import { Directive, inject } from "@angular/core";
import { DropdownNodeService } from "../dropdown-node/dropdown-node-service";

@Directive({
    selector: "[sg-dropdown-overlay]",
    host: {
        "role": "menu",
        "tabindex": "-1",
        "[attr.data-state]": "node.open() ? 'open' : 'closed'",
        "[attr.aria-hidden]": "!node.open()",
    },
})
export class DropdownOverlay {
    protected readonly node = inject(DropdownNodeService);
}
