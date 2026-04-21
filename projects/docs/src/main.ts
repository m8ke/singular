import { bootstrapApplication } from "@angular/platform-browser";

import { App } from "@/docs/app";
import { appConfig } from "@/docs/app.config";

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
