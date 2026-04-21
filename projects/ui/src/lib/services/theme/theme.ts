import { DOCUMENT, inject, Injectable, Renderer2, RendererFactory2, signal } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class Theme {
    public readonly activeTheme = signal<"light" | "dark">("light");

    private readonly rendererFactory = inject(RendererFactory2);
    private readonly renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
    private readonly document: Document = inject(DOCUMENT);

    public toggleTheme(): void {
        const next = this.activeTheme() === "light" ? "dark" : "light";
        this.setTheme(next);
    }

    public setTheme(theme: "light" | "dark"): void {
        this.activeTheme.set(theme);
        this.renderer.setAttribute(this.document.documentElement, "data-theme", theme);
    }
}
