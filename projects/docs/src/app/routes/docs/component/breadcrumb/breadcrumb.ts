import { Component } from "@angular/core";
import { Breadcrumb, BreadcrumbItem } from "@singular/ui";
import { CodeArea } from "@/docs/ui/code-area/code-area";
import { Preview } from "@/docs/ui/preview/preview";
import { RouterLink } from "@angular/router";

@Component({
    imports: [CodeArea, Preview, Breadcrumb, RouterLink, BreadcrumbItem],
    templateUrl: "./breadcrumb.html",
    styleUrl: "./breadcrumb.css",
})
export class ComponentBreadcrumb {}
