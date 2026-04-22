import {
    Component,
    DOCUMENT,
    HostListener,
    inject,
    input,
    model,
    OnChanges,
    Renderer2,
    RendererFactory2,
    SimpleChanges,
    ViewEncapsulation,
} from "@angular/core";

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
export class Drawer implements OnChanges {
    public readonly open = model<boolean>(false);
    public readonly dismissable = input<boolean>(true);
    public readonly placement = input<"top" | "right" | "bottom" | "left">("right");

    private readonly rendererFactory = inject(RendererFactory2);
    private readonly document: Document = inject(DOCUMENT);
    private readonly renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

    public ngOnChanges(changes: SimpleChanges<Drawer>): void {
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
