import { bootstrapApplication, BootstrapContext } from "@angular/platform-browser";
import { App } from "@singular/docs/app";
import { config } from "@singular/docs/app.config.server";

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
