import { bootstrapApplication } from "@angular/platform-browser";

import { App } from "@singular/docs/app";
import { appConfig } from "@singular/docs/app.config";

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
