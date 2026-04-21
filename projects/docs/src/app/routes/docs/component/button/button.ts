import { Component, signal, ViewEncapsulation } from "@angular/core";
import { LucideBrainCircuit, LucideRocket, LucideSettings2, LucideTrash2 } from "@lucide/angular";

import { Button } from "@singular/ui";

import { Preview } from "@/docs/ui/preview/preview";
import { CodeArea } from "@/docs/ui/code-area/code-area";

@Component({
    imports: [
        CodeArea,
        Preview,
        Button,
        LucideRocket,
        LucideBrainCircuit,
        LucideSettings2,
        LucideTrash2,
    ],
    styleUrl: "./button.css",
    templateUrl: "./button.html",
    encapsulation: ViewEncapsulation.None,
})
export class ComponentButton {
    protected readonly isButtonLoading = signal<boolean>(false);

    protected setButtonLoading(duration: number = 2000): void {
        if (this.isButtonLoading()) {
            return;
        }

        this.isButtonLoading.set(true);

        setTimeout((): void => {
            this.isButtonLoading.set(false);
        }, duration);
    }
}
