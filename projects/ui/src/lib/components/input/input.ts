import { Component, input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "input[sg-input], textarea[sg-input], input.input, textarea.input",
    templateUrl: "./input.html",
    encapsulation: ViewEncapsulation.None,
    host: {
        "[class]": "'input'",
        "[class.variant-primary]": "variant() === 'primary'",
        "[class.variant-secondary]": "variant() === 'secondary'",
    },
})
export class Input {
    public readonly variant = input<"primary" | "secondary">("primary");
}
