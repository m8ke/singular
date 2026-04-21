import { Component } from "@angular/core";
import { Spinner } from "@singular/ui";
import { CodeArea } from "@/docs/ui/code-area/code-area";
import { Preview } from "@/docs/ui/preview/preview";

@Component({
    styleUrl: "./spinner.css",
    templateUrl: "./spinner.html",
    imports: [CodeArea, Preview, Spinner],
})
export class ComponentSpinner {}
