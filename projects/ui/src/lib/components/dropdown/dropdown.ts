import { ChangeDetectionStrategy, Component, effect, inject, input, ViewEncapsulation } from "@angular/core";
import { DropdownNodeService } from "./dropdown-node/dropdown-node.service";
import { DropdownRegistryService } from "./dropdown-registry.service";

@Component({
    selector: "[sg-dropdown]",
    templateUrl: "./dropdown.html",
    providers: [DropdownNodeService],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        "role": "menu",
        "[attr.data-position]": "position()",
        "(document:click)": "node.close()",
    },
})
export class Dropdown {
    public readonly position = input<string>("bottom span-right");
    protected readonly node = inject(DropdownNodeService);
    private readonly registry = inject(DropdownRegistryService);
    private readonly dropdownId = crypto.randomUUID();

    public constructor() {
        effect(() => {
            if (this.node.open()) {
                this.registry.activate(this.dropdownId);
                return;
            }

            this.registry.clear(this.dropdownId);
        });

        effect(() => {
            const activeDropdownId = this.registry.getActiveDropdownId();
            if (activeDropdownId !== this.dropdownId && this.node.open()) {
                this.node.close();
            }
        });
    }
}
