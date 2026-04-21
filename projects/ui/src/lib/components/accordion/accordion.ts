import { Component, contentChildren, signal, ViewEncapsulation } from "@angular/core";
import { AccordionItem } from "./accordion-item/accordion-item";

@Component({
    selector: "div[sg-accordion], section[sg-accordion], ul[sg-accordion]",
    templateUrl: "./accordion.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'accordion'",
    },
})
export class Accordion {
    public readonly items = contentChildren(AccordionItem, { descendants: true });
    public readonly activeIndex = signal<number | null>(null);

    public ngAfterContentInit(): void {
        this.items().forEach((item, index): void => {
            item.toggle.subscribe((): void => {
                if (this.activeIndex() === index) {
                    this.activeIndex.set(null);
                } else {
                    this.activeIndex.set(index);
                }
                this.updateItems();
            });
        });

        this.updateItems();
    }

    private updateItems(): void {
        this.items().forEach((item, i) => {
            item.isOpen.set(this.activeIndex() === i);
        });
    }
}
