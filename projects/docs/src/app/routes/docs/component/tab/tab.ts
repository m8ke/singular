import { Component } from "@angular/core";

import { TabUsage } from "@/docs/routes/docs/component/tab/tab-usage/tab-usage";
import { DocsStructure } from "@/docs/routes/docs/docs-structure";
import { LayoutSection } from "@/docs/ui/layout/layout-section/layout-section";

@Component({
    styleUrl: "./tab.css",
    templateUrl: "./tab.html",
    imports: [LayoutSection],
})
export class ComponentTab {
    protected readonly sections: DocsStructure = {
        title: "Usage",
        component: TabUsage,
        code: `code`,
    };
}
