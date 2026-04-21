import { Component } from "@angular/core";
import { CodeArea } from "@/docs/ui/code-area/code-area";
import { Preview } from "@/docs/ui/preview/preview";

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableFooter,
    TableHeader,
    TableRow,
} from "@singular/ui";

@Component({
    styleUrl: "./table.css",
    templateUrl: "./table.html",
    imports: [
        CodeArea,
        Preview,
        Table,
        TableColumn,
        TableRow,
        TableCell,
        TableBody,
        TableHeader,
        TableFooter,
    ],
})
export class ComponentTable {
}
