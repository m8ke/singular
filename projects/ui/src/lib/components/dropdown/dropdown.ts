import { ChangeDetectionStrategy, Component, effect, inject, input, signal, ViewEncapsulation } from "@angular/core";
import { DropdownNodeService } from "./dropdown-node/dropdown-node-service";

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
    private static readonly activeRootId = signal<string | null>(null);

    public readonly position = input<string>("bottom span-right");
    protected readonly node = inject(DropdownNodeService);
    private readonly dropdownId = crypto.randomUUID();

    public constructor() {
        effect((): void => {
            if (this.node.open()) {
                Dropdown.activeRootId.set(this.dropdownId);
                return;
            }

            if (Dropdown.activeRootId() === this.dropdownId) {
                Dropdown.activeRootId.set(null);
            }
        });

        effect((): void => {
            const activeDropdownId = Dropdown.activeRootId();
            if (activeDropdownId !== this.dropdownId && this.node.open()) {
                this.node.close();
            }
        });
    }
}
