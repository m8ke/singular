import { Component, signal } from "@angular/core";
import { Button, Dialog } from "@singular/ui";

@Component({
    template: `
        <button sg-button (click)="dialog.set(true)">Open Dialog</button>

        <section sg-dialog [(open)]="dialog">
            <article class="p-8 gap-y-4 grid">
                <h3>What is Angular?</h3>
                <p>
                    Angular is a web framework that empowers developers to build fast, reliable
                    applications that users love.
                </p>
                <p>
                    Maintained by a dedicated team at Google, Angular provides a broad suite of
                    tools, APIs, and libraries to simplify and streamline your development workflow.
                    Angular gives you a solid platform on which to build fast, reliable applications
                    that scale with both the size of your team and the size of your codebase.
                    <a href="https://angular.dev" target="_blank" class="text-rose-500 underline">Angular.dev</a> is the official
                    home for Angular documentation.
                </p>
                <button sg-button (click)="dialog.set(false)">
                    Okay
                </button>
            </article>
        </section>
    `,
    imports: [Dialog, Button],
})
export class DialogUsage {
    protected readonly dialog = signal<boolean>(false);
}
