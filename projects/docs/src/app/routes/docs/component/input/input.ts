import { Component } from "@angular/core";
import { Helper, Input, Label } from "@singular/ui";

import { Preview } from "@/docs/ui/preview/preview";
import { CodeArea } from "@/docs/ui/code-area/code-area";

@Component({
    styleUrl: "./input.css",
    templateUrl: "./input.html",
    imports: [CodeArea, Preview, Input, Label, Helper],
})
export class ComponentInput {}
