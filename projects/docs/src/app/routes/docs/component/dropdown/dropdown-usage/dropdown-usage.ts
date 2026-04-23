import { Component, signal } from "@angular/core";

import { Button, Dropdown, DropdownBody, DropdownDivider, DropdownItem, DropdownTrigger } from "@singular/ui";

@Component({
    template: `
        <div app-dropdown position="bottom span-right">
            <button sg-button dropdown-trigger>Account</button>

            <ul sg-dropdown-body>
                <li sg-dropdown-item>Profile</li>
                <li sg-dropdown-item>Settings</li>
                <li sg-dropdown-item>Notifications</li>
                <li sg-dropdown-item>Switch to light</li>

                <hr sg-dropdown-divider />

                <li sg-dropdown-item [closeOnAction]="true">Log out</li>
            </ul>
        </div>
    `,
    imports: [Dropdown, DropdownBody, DropdownItem, DropdownDivider, DropdownTrigger, Button],
})
export class DropdownUsage {
    protected readonly drawer = signal<boolean>(false);
}
