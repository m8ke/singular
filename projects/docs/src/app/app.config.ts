import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter, withInMemoryScrolling, withViewTransitions } from "@angular/router";

import { routes } from "@singular/docs/app.routes";
import { provideSingular } from "@singular/ui";

export const appConfig: ApplicationConfig = {
    providers: [
        provideSingular({
            style: "singular",
        }),
        provideRouter(
            routes,
            withViewTransitions(),
            withInMemoryScrolling({
                scrollPositionRestoration: "top",
            }),
        ),
        provideBrowserGlobalErrorListeners(),
        provideClientHydration(withEventReplay()),
    ],
};
