import { RouterLink, RouterOutlet } from "@angular/router";
import { Component, inject, ViewEncapsulation } from "@angular/core";

import { Button, Theme } from "@singular/ui";
import { LucideMoon, LucideSun } from "@lucide/angular";

@Component({
    imports: [RouterLink, RouterOutlet, Button, LucideMoon, LucideSun],
    styleUrl: "./docs.css",
    templateUrl: "./docs.html",
    encapsulation: ViewEncapsulation.None,
})
export class Docs {
    private readonly theme: Theme = inject(Theme);

    protected get activeTheme() {
        return this.theme.activeTheme;
    }

    protected get logoUrl() {
        if (this.theme.activeTheme() == "dark") {
            return "singular-light.svg";
        }
        return "singular-dark.svg";
    }

    protected toggleTheme(): void {
        this.theme.toggleTheme();
    }
}
