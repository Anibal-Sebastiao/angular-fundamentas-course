import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsComponent } from './events.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }
