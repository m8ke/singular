import { RouterLink, RouterOutlet } from "@angular/router";
import { Component, inject, OnInit, ViewEncapsulation } from "@angular/core";

import { Button, Tab, TabItem, Theme } from "@singular/ui";
import { LucideMoon, LucideSun } from "@lucide/angular";

@Component({
    imports: [RouterLink, RouterOutlet, Tab, TabItem, Button, LucideMoon, LucideSun],
    styleUrl: "./docs.css",
    templateUrl: "./docs.html",
    encapsulation: ViewEncapsulation.None,
})
export class Docs implements OnInit {
    private readonly theme: Theme = inject(Theme);

    protected get activeTheme() {
        return this.theme.activeTheme;
    }

    public ngOnInit(): void {
        this.toggleTheme();
    }

    protected toggleTheme(): void {
        this.theme.toggleTheme();
    }
}
