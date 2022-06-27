import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { ToastrService } from './ccommon/toastr.service';

import { EventsComponent } from './events.component';
import { EventDetailComponent } from './events/event-detail/event-detail';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { CretateEventComponent } from './events/create-event/create-event.component';
import { EventGuard } from './events/event..guard';
import { EventListResolver } from './events/event-list.resolver';

@NgModule({
  declarations: [
    EventsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailComponent,
    CretateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    RouterModule
  ],
  providers: [EventService, ToastrService, EventGuard, EventListResolver],
  bootstrap: [EventsComponent]
})
export class AppModule { }
