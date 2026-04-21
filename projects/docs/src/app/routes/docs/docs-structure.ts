import { Type } from "@angular/core";

export interface DocsStructure {
    title: string;
    description?: string;
    component: Type<any> | null;
    code: string;
    children?: DocsStructure[];
}
