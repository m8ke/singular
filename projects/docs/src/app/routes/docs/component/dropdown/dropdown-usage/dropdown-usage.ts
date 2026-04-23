import { Component, inject } from "@angular/core";

import {
    Button,
    Dropdown,
    DropdownBody,
    DropdownDivider,
    DropdownItem,
    DropdownNodeDirective,
    DropdownOverlay,
    DropdownTrigger,
    Theme,
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
                        <div sg-dropdown-trigger sg-dropdown-item>
                            Appearance
                            <span sg-dropdown-indicator>&rsaquo;</span>
                        </div>

                        <div sg-dropdown-overlay>
                            <div sg-dropdown-body>
                                <div sg-dropdown-item [closeOnSelect]="false" (click)="theme.setTheme('light')">Light</div>
                                <div sg-dropdown-item [closeOnSelect]="false" (click)="theme.setTheme('dark')">Dark</div>
                            </div>
                        </div>
                    </div>

                    <div sg-dropdown-node>
                        <div sg-dropdown-trigger sg-dropdown-item>
                            Click here
                            <span sg-dropdown-indicator>&rsaquo;</span>
                        </div>

                        <div sg-dropdown-overlay>
                            <div sg-dropdown-body>
                                <div sg-dropdown-item [closeOnSelect]="false">No, next one</div>

                                <div sg-dropdown-node>
                                    <div sg-dropdown-trigger sg-dropdown-item>
                                        Oh no!
                                        <span sg-dropdown-indicator>&rsaquo;</span>
                                    </div>

                                    <div sg-dropdown-overlay>
                                        <div sg-dropdown-body>
                                            <div sg-dropdown-item [closeOnSelect]="false">Yep</div>
                                            <div sg-dropdown-item [closeOnSelect]="false">Scary</div>
                                        </div>
                                    </div>
                                </div>
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
export class DropdownUsage {
    protected readonly theme = inject(Theme);
}
