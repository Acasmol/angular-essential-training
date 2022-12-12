import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {

  //@Input() decorator is used to exposed the propertie
  @Input() mediaItem;

  //Suscribing to our on custom component just like navite DOM events
  //It is used like a fallback method to retrieve data to the parent components
  @Output() delete = new EventEmitter();

   //This will use as an example of interpolation
   //See the file media-item.component.html an look for '{{}}' containing the 'name' word
   //That is interpolation
    name = 'The Redemption';
    wasWatched(){
      return true;
    }

    onDelete()
    {
      console.log('deleted');
      //In the bellow method should pass the data that we want to retrieve to the parent component
      this.delete.emit(this.mediaItem);
    }
}
