import { Route, Router } from "@angular/router";
import { inject, Injectable } from "@angular/core";

export interface ContentsPath {
    id: string;
    name: string;
    level: number;
    children: ContentsPath[];
}

export interface RoutePath {
    path: string;
    title: string;
}

@Injectable({
    providedIn: "root",
})
export class PathTree {
    private readonly router: Router = inject(Router);

    public getRoutePaths(path: string): RoutePath[] {
        path = path.replace(/^\/+|\/+$/g, "");

        const segments: string[] = path.split("/");

        let currentRoutes: Route[] | undefined = this.router.config;
        let targetRoute: Route | undefined;

        for (const segment of segments) {
            targetRoute = currentRoutes?.find((r) => r.path === segment);
            currentRoutes = targetRoute?.children;
        }

        return (targetRoute?.children ?? [])
            .filter(
                (route): route is Route & { title: string } =>
                    typeof route.title === "string" && route.title.trim().length > 0,
            )
            .map((route) => ({
                path: `/${path}/${route.path}`.replace(/\/$/, ""),
                title: route.title,
            }))
            .sort((a, b) => a.title.localeCompare(b.title));
    }

    public getContentsPath(contentArea: any): ContentsPath[] {
        const root: ContentsPath[] = [];
        const stack: ContentsPath[] = [];

        contentArea.forEach((node: any): void => {
            const element = node as HTMLElement;
            const level: number = parseInt(element.tagName.substring(1));

            const newNode: ContentsPath = {
                id: element.id || Math.random().toString(36).substring(2, 9),
                name: element.innerText || element.textContent || "",
                level: level,
                children: [],
            };

            if (!element.id) {
                element.id = newNode.id;
            }

            while (stack.length > 0 && stack[stack.length - 1].level >= level) {
                stack.pop();
            }

            if (stack.length === 0) {
                root.push(newNode);
            } else {
                stack[stack.length - 1].children.push(newNode);
            }

            stack.push(newNode);
        });

        return root;
    }
}
