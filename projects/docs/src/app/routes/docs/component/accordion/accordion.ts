import { Component } from "@angular/core";
import { DocsStructure } from "@/docs/routes/docs/docs-structure";
import { LayoutSection } from "@/docs/ui/layout/layout-section/layout-section";
import { AccordionUsage } from "@/docs/routes/docs/component/accordion/accordion-usage/accordion-usage";

import accordionUsageRaw from "@/docs/routes/docs/component/accordion/accordion-usage/accordion-usage.raw";

@Component({
    styleUrl: "./accordion.css",
    templateUrl: "./accordion.html",
    imports: [LayoutSection],
})
export class ComponentAccordion {
    protected readonly sections: DocsStructure = {
        title: "Usage",
        component: AccordionUsage,
        code: accordionUsageRaw,
    };
}
