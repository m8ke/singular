import { Component } from "@angular/core";

import { DialogUsage } from "@/docs/routes/docs/component/dialog/dialog-usage/dialog-usage";
import { DocsStructure } from "@/docs/routes/docs/docs-structure";
import { LayoutSection } from "@/docs/ui/layout/layout-section/layout-section";

@Component({
    styleUrl: "./dialog.css",
    templateUrl: "./dialog.html",
    imports: [LayoutSection],
})
export class ComponentDialog {
    protected readonly sections: DocsStructure = {
        title: "Usage",
        component: DialogUsage,
        code: `code`,
    };
}
