import { Routes } from "@angular/router";

import { Docs } from "@/docs/routes/docs/docs";
import { Pipes } from "@/docs/routes/docs/pipe/pipes";
import { Components } from "@/docs/routes/docs/component/component";
import { ComponentButton } from "@/docs/routes/docs/component/button/button";
import { GettingStarted } from "@/docs/routes/docs/getting-started/getting-started";
import { ComponentSpinner } from "@/docs/routes/docs/component/spinner/spinner";
import { Introduction } from "@/docs/routes/docs/getting-started/introduction/introduction";
import { QuickStart } from "@/docs/routes/docs/getting-started/quick-start/quick-start";
import { ComponentAccordion } from "@/docs/routes/docs/component/accordion/accordion";
import { ComponentBreadcrumb } from "@/docs/routes/docs/component/breadcrumb/breadcrumb";
import { ComponentInput } from "@/docs/routes/docs/component/input/input";
import { ComponentLabel } from "@/docs/routes/docs/component/label/label";
import { ComponentDialog } from "@/docs/routes/docs/component/dialog/dialog";
import { ComponentTooltip } from "@/docs/routes/docs/component/tooltip/tooltip";
import { ComponentDrawer } from "@/docs/routes/docs/component/drawer/drawer";
import { ComponentTable } from "@/docs/routes/docs/component/table/table";
import { ComponentTab } from "@/docs/routes/docs/component/tab/tab";
import { ComponentDropdown } from "@/docs/routes/docs/component/dropdown/dropdown";

export const routes: Routes = [
    {
        path: "docs",
        component: Docs,
        children: [
            {
                path: "getting-started",
                component: GettingStarted,
                children: [
                    {
                        path: "introduction",
                        component: Introduction,
                        title: "Introduction",
                    },
                    {
                        path: "quick-start",
                        component: QuickStart,
                        title: "Quick Start",
                    },
                    {
                        path: "**",
                        redirectTo: "introduction",
                    },
                ],
            },
            {
                path: "components",
                component: Components,
                children: [
                    {
                        path: "accordion",
                        component: ComponentAccordion,
                        title: "Accordion",
                    },
                    {
                        path: "breadcrumb",
                        component: ComponentBreadcrumb,
                        title: "Breadcrumb",
                    },
                    {
                        path: "button",
                        component: ComponentButton,
                        title: "Button",
                    },
                    {
                        path: "dialog",
                        component: ComponentDialog,
                        title: "Dialog",
                    },
                    {
                        path: "drawer",
                        component: ComponentDrawer,
                        title: "Drawer",
                    },
                    {
                        path: "dropdown",
                        component: ComponentDropdown,
                        title: "Dropdown",
                    },
                    {
                        path: "input",
                        component: ComponentInput,
                        title: "Input",
                    },
                    {
                        path: "label",
                        component: ComponentLabel,
                        title: "Label",
                    },
                    {
                        path: "spinner",
                        component: ComponentSpinner,
                        title: "Spinner",
                    },
                    {
                        path: "tabs",
                        component: ComponentTab,
                        title: "Tabs",
                    },
                    {
                        path: "table",
                        component: ComponentTable,
                        title: "Table",
                    },
                    {
                        path: "tooltip",
                        component: ComponentTooltip,
                        title: "Tooltip",
                    },
                    {
                        path: "**",
                        redirectTo: "accordion",
                    },
                ],
            },
            {
                path: "pipes",
                children: [
                    {
                        path: "",
                        component: Pipes,
                    },
                ],
            },
            {
                path: "**",
                redirectTo: "getting-started",
            },
        ],
    },
    {
        path: "**",
        redirectTo: "docs",
    },
];
