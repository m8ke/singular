import { Component } from "@angular/core";

import {
    Button,
    Dropdown,
    DropdownBody,
    DropdownDivider,
    DropdownItem,
    DropdownNodeDirective,
    DropdownOverlay,
    DropdownTrigger,
} from "@singular/ui";

@Component({
    template: `
        <div sg-dropdown position="bottom span-right">
            <button sg-button sg-dropdown-trigger>Account</button>

            <div sg-dropdown-overlay>
                <div sg-dropdown-body>
                    <div sg-dropdown-item>Profile</div>
                    <div sg-dropdown-item>Settings</div>
                    <div sg-dropdown-item>Notifications</div>

                    <div sg-dropdown-node>
                        <div sg-dropdown-trigger sg-dropdown-item>Appearance</div>

                        <div sg-dropdown-overlay>
                            <div sg-dropdown-body>
                                <div sg-dropdown-item [closeOnSelect]="false">Light</div>
                                <div sg-dropdown-item [closeOnSelect]="false">Dark</div>
                            </div>
                        </div>
                    </div>

                    <div sg-dropdown-divider></div>

                    <div sg-dropdown-item>Log out</div>
                </div>
            </div>
        </div>
    `,
    imports: [Dropdown, DropdownBody, DropdownItem, DropdownTrigger, DropdownDivider, DropdownNodeDirective, DropdownOverlay, Button],
})
export class DropdownUsage {}
