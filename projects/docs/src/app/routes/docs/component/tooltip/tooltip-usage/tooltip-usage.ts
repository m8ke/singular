import { Component } from "@angular/core";
import { Button, Tooltip } from "@singular/ui";

@Component({
    template: `
        <button sg-button sg-tooltip tooltipText="I am a Teapot" tooltipPosition="top">
            Hover here
        </button>
    `,
    imports: [Button, Tooltip],
})
export class TooltipUsage {}
