import { InjectionToken, Provider } from "@angular/core";

export type Theme = "light" | "dark";
export type Style = "singular" | "blank";

export interface SingularConfig {
    theme?: Theme;
    style?: Style;
}

export const SINGULAR_CONFIG = new InjectionToken<SingularConfig>("SINGULAR_CONFIG");

export function provideSingular(config: SingularConfig): Provider {
    return {
        provide: SINGULAR_CONFIG,
        useValue: {
            style: config.style || "blank",
            theme: config.theme || "light",
        },
    };
}
