import { Directive, effect, inject } from "@angular/core";
import { DropdownNodeService } from "./dropdown-node.service";

@Directive({
    selector: "[sg-dropdown-node]",
    providers: [DropdownNodeService],
    host: {
        "role": "none",
    },
})
export class DropdownNodeDirective {
    private readonly node = inject(DropdownNodeService);
    private readonly parentNode = inject(DropdownNodeService, { optional: true, skipSelf: true });

    public constructor() {
        const parentNode = this.parentNode;
        if (parentNode) {
            effect(() => {
                if (this.node.open()) {
                    parentNode.activateChild(this.node);
                    return;
                }

                parentNode.clearChild(this.node);
            });

            effect(() => {
                if (parentNode.activeChild() !== this.node && this.node.open()) {
                    this.node.close();
                }
            });

            effect(() => {
                if (!parentNode.open()) {
                    this.node.close();
                }
            });
        }
    }
}
