import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "div[sg-drawer-content], section[sg-drawer-content], main[sg-drawer-content], article[sg-drawer-content]",
    templateUrl: "./drawer-content.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'drawer-content'",
    },
})
export class DrawerContent {}
