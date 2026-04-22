import { Component, DOCUMENT, effect, HostListener, inject, input, model, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "[sg-drawer]",
    templateUrl: "./drawer.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'drawer'",
        "[class.open]": "open()",
        "[class.placement-top]": "placement() === 'top'",
        "[class.placement-left]": "placement() === 'left'",
        "[class.placement-right]": "placement() === 'right'",
        "[class.placement-bottom]": "placement() === 'bottom'",
    },
})
export class Drawer {
    public readonly open = model<boolean>(false);
    public readonly dismissable = input<boolean>(true);
    public readonly placement = input<"top" | "right" | "bottom" | "left">("right");

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
