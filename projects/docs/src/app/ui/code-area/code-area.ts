import { Component, computed, input, signal, ViewEncapsulation } from "@angular/core";
import { LucideCheck, LucideCopy } from "@lucide/angular";

/**
 * TODO: Refactor and move to UI library
 */
@Component({
    selector: "docs-code-area",
    imports: [LucideCopy, LucideCheck],
    styleUrl: "./code-area.css",
    templateUrl: "./code-area.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'code-area'",
    },
})
export class CodeArea {
    public readonly code = input.required<string>();
    public readonly showLines = input<boolean>(false);

    protected readonly copied = signal<boolean>(false);
    protected readonly lines = computed((): string[] => {
        const raw: string = this.code().trim();
        return raw.split("\n");
    });

    protected async copyToClipboard(): Promise<void> {
        try {
            await navigator.clipboard.writeText(this.code());
            this.copied.set(true);
            setTimeout(() => this.copied.set(false), 2000);
        } catch (err) {
            console.error("Failed to copy code: ", err);
        }
    }
}
