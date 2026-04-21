import { Component, input, ViewEncapsulation } from "@angular/core";
import { CodeArea } from "@/docs/ui/code-area/code-area";

@Component({
    selector: "section[docs-preview]",
    imports: [CodeArea],
    styleUrl: "./preview.css",
    templateUrl: "./preview.html",
    encapsulation: ViewEncapsulation.None,
})
export class Preview {
    public readonly code = input.required<string>();
}
