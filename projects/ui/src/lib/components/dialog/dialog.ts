import {
    Component,
    DOCUMENT,
    ElementRef,
    HostListener,
    inject,
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
        "(click)": "onHostClick($event)",
        "[class]": "'dialog'",
        "[class.opacity-0]": "!open()",
        "[class.opacity-100]": "open()",
        "[class.pointer-events-none]": "!open()",
        "[class.pointer-events-auto]": "open()",
    },
})
export class Dialog implements OnChanges {
    public readonly open = model<boolean>(false);

    protected readonly panel = viewChild<ElementRef<HTMLElement>>("panel");

    private startedInsidePanel = signal<boolean>(false);
    private readonly rendererFactory = inject(RendererFactory2);
    private readonly renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
    private readonly document: Document = inject(DOCUMENT);

    public ngOnChanges(changes: SimpleChanges<Dialog>): void {
        if (changes.open?.currentValue) {
            this.renderer.setStyle(this.document.body, "overflow", "hidden");
        } else {
            this.renderer.removeStyle(this.document.body, "overflow");
        }
    }

    protected close(): void {
        this.open.set(false);
    }

    protected onDialogClick(event: MouseEvent): void {
        event.stopPropagation();
    }

    protected onHostClick(event: MouseEvent): void {
        const endedInsidePanel = this.panel()?.nativeElement.contains(event.target as Node);

        if (!this.startedInsidePanel() && !endedInsidePanel) {
            this.close();
        }

        this.startedInsidePanel.set(false);
    }

    @HostListener("document:mousedown", ["$event"])
    protected onMouseDown(event: MouseEvent): void {
        this.startedInsidePanel.set(
            this.panel()?.nativeElement.contains(event.target as Node) ?? false,
        );
    }

    @HostListener("document:keydown.escape")
    protected onEscape(): void {
        if (this.open()) {
            this.close();
        }
    }
}
