import { EventThumbnailComponent } from './event-thumbnail.component';
import { Component, ViewChild } from "@angular/core";


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '25/06/2022',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
}
