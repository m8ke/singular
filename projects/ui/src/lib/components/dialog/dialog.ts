import { Component, DOCUMENT, effect, HostListener, inject, input, model, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "[sg-dialog]",
    templateUrl: "./dialog.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'dialog'",
        "[class.open]": "open()",
    },
})
export class Dialog {
    public readonly open = model<boolean>(false);
    public readonly dismissable = input<boolean>(true);

    private readonly document: Document = inject(DOCUMENT);

    public constructor() {
        effect((): void => {
            this.document.body.style.overflow = this.open() ? "hidden" : "";
        });
    }

    protected onBackdropClick(): void {
        if (this.dismissable()) {
            this.open.set(false);
        }
    }

    @HostListener("document:keydown.escape")
    protected onEscape(): void {
        if (this.open()) {
            this.open.set(false);
        }
    }
}
