import { Component, input, ViewEncapsulation } from "@angular/core";

import { Spinner } from "../spinner/spinner";
import { Size, Variant } from "../component-type";
import { RouterLinkActive } from "@angular/router";

@Component({
    selector: "button[sg-button], a[sg-button]",
    imports: [Spinner],
    templateUrl: "./button.html",
    encapsulation: ViewEncapsulation.None,
    hostDirectives: [
        {
            directive: RouterLinkActive,
            inputs: ["routerLinkActiveOptions"],
        },
    ],
    host: {
        "[class]": "'button'",
        "[class.size-sm]": "size() === 'sm'",
        "[class.size-md]": "size() === 'md'",
        "[class.size-lg]": "size() === 'lg'",
        "[class.variant-primary]": "variant() === 'primary'",
        "[class.variant-secondary]": "variant() === 'secondary'",
        "[class.variant-tertiary]": "variant() === 'tertiary'",
        "[class.variant-ghost]": "variant() === 'ghost'",
        "[class.variant-danger]": "variant() === 'danger'",
        "[class.variant-outline]": "variant() === 'outline'",
        "[class.radius-full]": "radius() === 'full'",
        "[class.icon]": "isIcon()",
        "[class.disabled]": "disabled() || pending()",
        "[attr.aria-disabled]": "disabled()",
        "[attr.aria-busy]": "pending()",
    },
})
export class Button {
    public readonly size = input<Size>("md");
    public readonly radius = input<"full" | "sm" | "md" | "lg">("md");
    public readonly isIcon = input<boolean>(false);
    public readonly variant = input<Variant>("primary");
    public readonly disabled = input<boolean>(false);
    public readonly pending = input<boolean>(false);
    public readonly pendingText = input<string>();
}
