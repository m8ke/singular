import { DOCUMENT, inject, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class Theme {
    private readonly document: Document = inject(DOCUMENT);
    public readonly activeTheme = signal<"light" | "dark">(this.document.documentElement.getAttribute("data-theme") as "light" | "dark");

    public toggleTheme(): void {
        const next = this.activeTheme() === "light" ? "dark" : "light";
        this.setTheme(next);
    }

    public setTheme(theme: "light" | "dark"): void {
        this.activeTheme.set(theme);
        this.document.documentElement.setAttribute("data-theme", theme);
    }
}
