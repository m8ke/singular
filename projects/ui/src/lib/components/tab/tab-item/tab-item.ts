import { RouterLinkActive } from "@angular/router";
import { Component, computed, inject, input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "a[sg-tab-item], li[sg-tab-item], div[sg-tab-item]",
    templateUrl: "./tab-item.html",
    encapsulation: ViewEncapsulation.None,
    hostDirectives: [
        {
            directive: RouterLinkActive,
            inputs: ["routerLinkActiveOptions"],
        },
    ],
    host: {
        "[class]": "'tab-item'",
        "[class.active]": "routerLinkActive.isActive",
    },
})
export class TabItem {
    public readonly id = input<string>();
    public readonly routerLink = input<string>();
    protected readonly routerLinkActive = inject(RouterLinkActive);
    private readonly isRouter = computed(() => !!this.routerLink());
}
