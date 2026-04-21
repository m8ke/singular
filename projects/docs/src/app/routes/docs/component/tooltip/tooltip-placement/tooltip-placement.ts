import { Component } from "@angular/core";
import { Button, Tooltip } from "@singular/ui";

@Component({
    template: `
        <section class="grid grid-cols-3 gap-4 place-items-center">
            <div></div>
            <button sg-button sg-tooltip tooltipText="You are a teapot" tooltipPosition="top">
                Top
            </button>

            <div></div>
            <button sg-button sg-tooltip tooltipText="I am a teapot" tooltipPosition="left">
                Left
            </button>

            <div></div>
            <button sg-button sg-tooltip tooltipText="We are teapots" tooltipPosition="right">
                Right
            </button>

            <div></div>
            <button sg-button sg-tooltip tooltipText="They are teapots" tooltipPosition="bottom">
                Bottom
            </button>
            <div></div>
        </section>
    `,
    imports: [Button, Tooltip],
})
export class TooltipPlacement {}
