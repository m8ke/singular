import { Component, inject, ViewEncapsulation } from "@angular/core";
import { RouterLinkActive } from "@angular/router";

@Component({
    selector: "a[sg-breadcrumb-item], li[sg-breadcrumb-item], div[sg-breadcrumb-item]",
    templateUrl: "./breadcrumb-item.html",
    encapsulation: ViewEncapsulation.None,
    hostDirectives: [
        {
            directive: RouterLinkActive,
            inputs: ["routerLinkActiveOptions"],
        },
    ],
    host: {
        "[class]": "'breadcrumb-item'",
        "[class.active]": "routerLinkActive.isActive",
    },
})
export class BreadcrumbItem {
    protected readonly routerLinkActive = inject(RouterLinkActive);
}
