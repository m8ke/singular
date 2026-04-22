import {
    Component,
    DOCUMENT,
    ElementRef,
    HostListener,
    inject,
    input,
    model,
    OnChanges,
    Renderer2,
    RendererFactory2,
    signal,
    SimpleChanges,
    viewChild,
    ViewEncapsulation,
} from "@angular/core";

@Component({
    selector: "[sg-dialog]",
    templateUrl: "./dialog.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'dialog'",
        "[class.open]": "open()",
        "[class.opacity-0]": "!open()",
        "[class.opacity-100]": "open()",
        "[class.pointer-events-none]": "!open()",
        "[class.pointer-events-auto]": "open()",
    },
})
export class Dialog implements OnChanges {
    public readonly open = model<boolean>(false);
    public readonly dismissable = input<boolean>(true);

    private readonly document: Document = inject(DOCUMENT);
    private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);

    public ngOnChanges(changes: SimpleChanges<Dialog>): void {
        if (changes.open?.currentValue) {
            this.renderer.setStyle(this.document.body, "overflow", "hidden");
        } else {
            this.renderer.removeStyle(this.document.body, "overflow");
        }
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
