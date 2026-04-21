import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { PathTree, RoutePath } from "@/docs/services/path-tree/path-tree";
import { Layout } from "@/docs/ui/layout/layout";
import { Sidebar } from "@/docs/ui/sidebar/sidebar";

@Component({
    imports: [Layout, RouterLinkActive, RouterLink, RouterOutlet, Sidebar],
    styleUrl: "./getting-started.css",
    templateUrl: "./getting-started.html",
})
export class GettingStarted {
    private readonly fileTree: PathTree = inject(PathTree);

    protected getRoutePaths(): RoutePath[] {
        return this.fileTree.getRoutePaths("/docs/getting-started");
    }
}
