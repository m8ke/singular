import { Injectable, signal } from "@angular/core";

@Injectable()
export class DropdownNodeService {
    private readonly isOpen = signal<boolean>(false);
    public readonly open = this.isOpen.asReadonly();

    public toggle(): void {
        this.isOpen.update((value) => !value);
    }

    public close(): void {
        this.isOpen.set(false);
    }
}
