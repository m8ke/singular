import { Component, ElementRef, input, signal, ViewChild, ViewEncapsulation } from "@angular/core";

/**
 * TODO: Add custom overlay due to lack of support for other HTML elements but <button>
 */
@Component({
    selector: "[app-dropdown]",
    templateUrl: "./dropdown.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'dropdown'",
    },
})
export class Dropdown {
    public readonly position = input<string>("bottom span-right"); // https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-area
    public readonly id = signal(crypto.randomUUID());

    @ViewChild("panel", { static: true }) private panel!: ElementRef<HTMLElement>;

    public close(): void {
        this.panel.nativeElement.hidePopover();
    }
}
