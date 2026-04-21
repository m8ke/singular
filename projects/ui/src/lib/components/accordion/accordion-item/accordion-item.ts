import { Component, output, signal, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "div[sg-accordion-item], section[sg-accordion-item], li[sg-accordion-item]",
    templateUrl: "./accordion-item.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'accordion-item'",
    },
})
export class AccordionItem {
    public readonly isOpen = signal<boolean>(false);
    public readonly toggle = output<any>();

    protected onToggle(): void {
        this.toggle.emit(true);
    }
}
