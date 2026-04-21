import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";

import { routes } from "@/docs/app.routes";
import { provideLucideConfig } from "@lucide/angular";

export const appConfig: ApplicationConfig = {
    providers: [
        provideLucideConfig({
            size: 16,
            strokeWidth: 1.75,
        }),
        provideRouter(
            routes,
            withInMemoryScrolling({
                anchorScrolling: "enabled",
                scrollPositionRestoration: "enabled",
            }),
        ),
        provideBrowserGlobalErrorListeners(),
        provideClientHydration(withEventReplay()),
    ],
};
