import { Component, input } from "@angular/core";

export type ButtonSize = "base" | "sm" | "lg" | "xs";

@Component({
    selector: "sg-button",
    imports: [],
    templateUrl: "./button.html",
    styleUrl: "./button.css",
})
export class Button {
    public readonly size = input<ButtonSize>("base");
}
