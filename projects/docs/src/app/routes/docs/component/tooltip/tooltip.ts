import { Component } from "@angular/core";

import { DocsStructure } from "@/docs/routes/docs/docs-structure";
import { LayoutSection } from "@/docs/ui/layout/layout-section/layout-section";
import { TooltipUsage } from "@/docs/routes/docs/component/tooltip/tooltip-usage/tooltip-usage";
import { TooltipPlacement } from "@/docs/routes/docs/component/tooltip/tooltip-placement/tooltip-placement";

@Component({
    styleUrl: "./tooltip.css",
    templateUrl: "./tooltip.html",
    imports: [LayoutSection],
})
export class ComponentTooltip {
    protected readonly sections: DocsStructure[] = [
        {
            title: "Usage",
            component: TooltipUsage,
            code: `code`,
        },
        {
            title: "Placement",
            component: TooltipPlacement,
            code: `code`,
        },
    ];
}
