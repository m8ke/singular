import { provideServerRendering, withRoutes } from "@angular/ssr";
import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";

import { appConfig } from "@singular/docs/app.config";
import { serverRoutes } from "@singular/docs/app.routes.server";

const serverConfig: ApplicationConfig = {
    providers: [provideServerRendering(withRoutes(serverRoutes))],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
