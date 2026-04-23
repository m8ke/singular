import { Component } from "@angular/core";

import { DocsStructure } from "@/docs/routes/docs/docs-structure";
import { LayoutSection } from "@/docs/ui/layout/layout-section/layout-section";
import { DropdownUsage } from "@/docs/routes/docs/component/dropdown/dropdown-usage/dropdown-usage";

@Component({
    styleUrl: "./drawer.css",
    templateUrl: "./drawer.html",
    imports: [LayoutSection],
})
export class ComponentDropdown {
    protected readonly sections: DocsStructure = {
        title: "Usage",
        component: DropdownUsage,
        code: `code`,
    };
}
