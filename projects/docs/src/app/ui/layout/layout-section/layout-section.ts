import { NgComponentOutlet } from "@angular/common";
import { Component, input, ViewEncapsulation } from "@angular/core";

import { Preview } from "@/docs/ui/preview/preview";
import { DocsStructure } from "@/docs/routes/docs/docs-structure";

@Component({
    selector: "section[docs-layout-section]",
    imports: [Preview, NgComponentOutlet],
    styleUrl: "./layout-section.css",
    templateUrl: "./layout-section.html",
    encapsulation: ViewEncapsulation.None,
})
export class LayoutSection {
    public readonly level = input<number>(2);
    public readonly section = input.required<DocsStructure>();

    protected get headingTag(): string {
        return `h${Math.min(this.level(), 4)}`;
    }

    protected get nextLevel(): number {
        return Math.min(this.level() + 1, 4);
    }

    protected get id(): string {
        return this.section().title.toLowerCase().replace(/\s+/g, "-");
    }
}
