import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { Layout } from "@/docs/ui/layout/layout";
import { Sidebar } from "@/docs/ui/sidebar/sidebar";
import { PathTree, RoutePath } from "@/docs/services/path-tree/path-tree";

@Component({
    imports: [Layout, Sidebar, RouterLinkActive, RouterLink, RouterOutlet],
    styleUrl: "./component.css",
    templateUrl: "./component.html",
})
export class Components {
    private readonly fileTree: PathTree = inject(PathTree);

    protected getRoutePaths(): RoutePath[] {
        return this.fileTree.getRoutePaths("/docs/components");
    }
}
