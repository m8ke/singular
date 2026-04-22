import { Component } from "@angular/core";

import { DrawerUsage } from "@/docs/routes/docs/component/drawer/drawer-usage/drawer-usage";
import { DocsStructure } from "@/docs/routes/docs/docs-structure";
import { LayoutSection } from "@/docs/ui/layout/layout-section/layout-section";

@Component({
    styleUrl: "./drawer.css",
    templateUrl: "./drawer.html",
    imports: [LayoutSection],
})
export class ComponentDrawer {
    protected readonly sections: DocsStructure = {
        title: "Usage",
        component: DrawerUsage,
        code: `code`,
    };
}
