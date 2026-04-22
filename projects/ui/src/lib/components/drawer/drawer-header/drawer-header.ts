import { Component } from "@angular/core";

@Component({
    selector: "div[sg-drawer-header], section[sg-drawer-header], header[sg-drawer-header]",
    templateUrl: "./drawer-header.html",
    host: {
        "[class]": "'drawer-header'",
    },
})
export class DrawerHeader {}
