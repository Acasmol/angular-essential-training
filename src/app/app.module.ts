//Importing the NgModule decorator
import { NgModule } from '@angular/core';
//Importing because this is an browser-based app
import { BrowserModule } from '@angular/platform-browser';
//Importing the starting component
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';

//Importing directives
import { FavoriteDirective } from './favorite.directive';

//The keyword 'export' is required when we want to import this module in another file
@NgModule({
    //All these are know as metadata properties
    imports: [
        BrowserModule
    ], 
    //Used to bring any other angular modules required, 
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective
    ], 
    //To make use of componentes, directives and pipelines that dont come from another module
    bootstrap: [
        AppComponent
    ] //Will used for a root module, which components will be the starting point for the bootstrap process
})
export class AppModule{}