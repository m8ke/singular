import { Component } from "@angular/core";
import { Input, Label } from "@singular/ui";

import { Preview } from "@/docs/ui/preview/preview";
import { CodeArea } from "@/docs/ui/code-area/code-area";

@Component({
    styleUrl: "./label.css",
    templateUrl: "./label.html",
    imports: [CodeArea, Input, Preview, Label],
})
export class ComponentLabel {}
