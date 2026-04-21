import { Component } from "@angular/core";
import { CodeArea } from "@/docs/ui/code-area/code-area";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@singular/ui";

@Component({
    templateUrl: "./quick-start.html",
    styleUrl: "./quick-start.css",
    imports: [CodeArea, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow],
})
export class QuickStart {
}
