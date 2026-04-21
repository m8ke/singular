import { bootstrapApplication, BootstrapContext } from "@angular/platform-browser";
import { App } from "@/docs/app";
import { config } from "@/docs/app.config.server";

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
