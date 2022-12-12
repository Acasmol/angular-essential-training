//It has a bootstrap module function on it
//We can import class or functions
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);