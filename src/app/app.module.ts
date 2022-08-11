import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { ToastrService,CollapsibleWellComponent } from './common';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './events/event-detail/event-detail';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventGuard } from './events/event..guard';
import { EventListResolver } from './events/event-list.resolver';
import { UserRouting } from './user/user.routing';
import { AuthService } from './user/auth.service';

import {
  CreateSessionComponent,
  CretateEventComponent,
  EventService,
  SessionListComponent,
  DurationPipe
} from './events/shared';

@NgModule({
  declarations: [
    EventsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailComponent,
    CretateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRouting,
    RouterModule,
    UserRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService, ToastrService, EventGuard, EventListResolver, AuthService],
  bootstrap: [EventsComponent]
})
export class AppModule { }
