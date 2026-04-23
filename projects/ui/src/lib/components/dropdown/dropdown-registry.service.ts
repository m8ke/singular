import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class DropdownRegistryService {
    private readonly activeId = signal<string | null>(null);
    private readonly activeDropdownId = this.activeId.asReadonly();

    public activate(id: string): void {
        this.activeId.set(id);
    }

    public clear(id: string): void {
        if (this.activeId() === id) {
            this.activeId.set(null);
        }
    }

    public getActiveDropdownId(): string | null {
        return this.activeDropdownId();
    }
}
