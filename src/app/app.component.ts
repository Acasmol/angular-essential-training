import { Component } from '@angular/core';

@Component({
    selector: 'mw-app', //Angular will use to locate a custom tag an apply the component to
    templateUrl: './app.component.html', //The themplate of the component
    styleUrls: ['./app.component.css']
})
export class AppComponent{

    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        medium: 'series',
        category: 'Sciencie Fiction',
        year: 2010,
        watchedOn: 129416656384,
        isFavorite: false
    };

    onMediaItemDeleted(mediaItem){}

}