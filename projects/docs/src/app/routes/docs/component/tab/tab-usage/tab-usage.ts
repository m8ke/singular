import { Component, signal } from "@angular/core";
import { Tab, TabItem } from "@singular/ui";

@Component({
    template: `
        <ul sg-tab class="border-b border-default">
            <li sg-tab-item>Getting Started</li>
            <li sg-tab-item class="active">Components</li>
            <li sg-tab-item>Pipes</li>
            <li sg-tab-item>Services</li>
        </ul>
    `,
    imports: [Tab, TabItem],
})
export class TabUsage {
    protected readonly dialog = signal<boolean>(false);
}

