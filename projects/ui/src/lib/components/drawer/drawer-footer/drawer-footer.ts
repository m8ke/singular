import { Component } from "@angular/core";

@Component({
    selector: "div[sg-drawer-footer], section[sg-drawer-footer], footer[sg-drawer-footer]",
    templateUrl: "./drawer-footer.html",
    host: {
        "[class]": "'drawer-footer'",
    },
})
export class DrawerFooter {}
