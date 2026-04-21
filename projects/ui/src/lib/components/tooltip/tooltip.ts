import {
    Directive,
    effect,
    ElementRef,
    inject,
    input,
    output,
    Renderer2,
    signal,
} from "@angular/core";

@Directive({
    selector: "[sg-tooltip]",
})
export class Tooltip {
    public readonly tooltipText = input.required<string>();
    public readonly tooltipPosition = input<"top" | "right" | "bottom" | "left">("top");

    public readonly shown = output<void>();
    public readonly hidden = output<void>();
    public readonly showDelay = input<number>(0);
    public readonly hideDelay = input<number>(100);

    private readonly element = inject(ElementRef<HTMLElement>);
    private readonly renderer = inject(Renderer2);
    private readonly isVisible = signal<boolean>(false);
    private readonly tooltipElement = signal<HTMLElement | null>(null);

    private showTimeout: ReturnType<typeof setTimeout> | null = null;
    private hideTimeout: ReturnType<typeof setTimeout> | null = null;

    public constructor() {
        this.initListeners();

        effect((): void => {
            if (this.isVisible()) {
                this.createTooltip();
                this.shown.emit();
            } else {
                this.destroyTooltip();
                this.hidden.emit();
            }
        });
    }

    private initListeners(): void {
        const native = this.element.nativeElement;

        this.renderer.listen(native, "mouseenter", () => {
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
            }

            if (this.showTimeout) return;

            this.showTimeout = setTimeout(() => {
                this.isVisible.set(true);
                this.showTimeout = null;
            }, this.showDelay());
        });

        this.renderer.listen(native, "mouseleave", () => {
            if (this.showTimeout) {
                clearTimeout(this.showTimeout);
                this.showTimeout = null;
            }

            if (this.hideTimeout) return;

            this.hideTimeout = setTimeout(() => {
                this.isVisible.set(false);
                this.hideTimeout = null;
            }, this.hideDelay());
        });
    }

    private createTooltip(): void {
        if (this.tooltipElement()) {
            return;
        }

        const tooltip = this.renderer.createElement("div");

        this.renderer.addClass(tooltip, "tooltip");
        this.renderer.addClass(tooltip, this.tooltipPosition());

        this.renderer.appendChild(tooltip, this.renderer.createText(this.tooltipText()));
        this.renderer.appendChild(document.body, tooltip);

        this.tooltipElement.set(tooltip);

        this.setPosition();

        requestAnimationFrame(() => {
            this.renderer.addClass(tooltip, "show");
        });
    }

    private destroyTooltip(): void {
        const tooltip = this.tooltipElement();

        if (!tooltip) {
            return;
        }

        this.renderer.removeClass(tooltip, "show");

        const current = tooltip;

        setTimeout((): void => {
            if (this.tooltipElement() === current) {
                this.renderer.removeChild(document.body, current);
                this.tooltipElement.set(null);
            }
        }, 150);
    }

    private setPosition(): void {
        const tooltip = this.tooltipElement();
        const host = this.element.nativeElement;

        if (!tooltip) {
            return;
        }

        const rect = host.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const pos = this.tooltipPosition();

        let top = 0;
        let left = 0;

        switch (pos) {
            case "top":
                top = rect.top - tooltipRect.height - 8;
                left = rect.left + rect.width / 2 - tooltipRect.width / 2;
                break;

            case "bottom":
                top = rect.bottom + 8;
                left = rect.left + rect.width / 2 - tooltipRect.width / 2;
                break;

            case "left":
                top = rect.top + rect.height / 2 - tooltipRect.height / 2;
                left = rect.left - tooltipRect.width - 8;
                break;

            case "right":
                top = rect.top + rect.height / 2 - tooltipRect.height / 2;
                left = rect.right + 8;
                break;
        }

        this.renderer.setStyle(tooltip, "top", `${top}px`);
        this.renderer.setStyle(tooltip, "left", `${left}px`);
    }
}
