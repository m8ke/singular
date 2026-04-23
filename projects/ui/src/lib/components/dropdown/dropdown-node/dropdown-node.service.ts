import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class DropdownNodeService {
    private readonly isOpen = signal<boolean>(false);
    public readonly open = this.isOpen.asReadonly();
    private readonly activeChildNode = signal<DropdownNodeService | null>(null);
    public readonly activeChild = this.activeChildNode.asReadonly();

    public toggle(): void {
        this.isOpen.update((value) => !value);
    }

    public close(): void {
        this.isOpen.set(false);
        this.activeChildNode.set(null);
    }

    public activateChild(node: DropdownNodeService): void {
        this.activeChildNode.set(node);
    }

    public clearChild(node: DropdownNodeService): void {
        if (this.activeChildNode() === node) {
            this.activeChildNode.set(null);
        }
    }
}
