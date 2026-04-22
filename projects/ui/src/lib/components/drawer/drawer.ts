import { Component, input, model, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "[sg-drawer]",
    templateUrl: "./drawer.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'drawer'",
        "[class.open]": "open()",
        "[class.placement-top]": "placement() === 'top'",
        "[class.placement-left]": "placement() === 'left'",
        "[class.placement-right]": "placement() === 'right'",
        "[class.placement-bottom]": "placement() === 'bottom'",
    },
})
export class Drawer {
    public readonly open = model<boolean>(false);
    public readonly dismissable = input<boolean>(true);
    public readonly placement = input<"top" | "right" | "bottom" | "left">("right");

    protected onClose(): void {
        if (this.dismissable()) {
            this.open.set(false);
        }
    }
}
