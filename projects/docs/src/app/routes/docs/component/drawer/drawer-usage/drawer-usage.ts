import { Component, signal } from "@angular/core";
import { Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader } from "@singular/ui";

@Component({
    template: `
        <button sg-button (click)="drawer.set(true)">
            Open Drawer
        </button>

        <section sg-drawer [(open)]="drawer" placement="right">
            <div class="flex flex-col gap-2 p-5 h-full">
                <header sg-drawer-header>
                    <h3>Drawer</h3>
                </header>

                <section sg-drawer-body>
                    <p>
                        A drawer (/drɔːr/ DROR) is a box-shaped container inside a piece of furniture that can be pulled out horizontally to
                        access its contents. Drawers are built into numerous types of furniture, including cabinets, chests of drawers
                        (bureaus), desks, and the like.
                    </p>
                </section>

                <footer sg-drawer-footer>
                    <button sg-button variant="tertiary" (click)="drawer.set(false)">
                        Cancel
                    </button>

                    <button sg-button (click)="drawer.set(false)">
                        Continue
                    </button>
                </footer>
            </div>
        </section>
    `,
    imports: [Button, Drawer, DrawerHeader, DrawerBody, DrawerFooter],
})
export class DrawerUsage {
    protected readonly drawer = signal<boolean>(false);
}
