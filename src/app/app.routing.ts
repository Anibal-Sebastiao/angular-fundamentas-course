import { EventsComponent } from './events.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsListComponent } from './events/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail';
import { CretateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './erros/404.component';
import { EventGuard } from './events/event..guard';
import { EventListResolver } from './events/event-list.resolver';


const ROUTES: Routes= [
  { path: 'events/new', component: CretateEventComponent },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventGuard] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
]

@NgModule({
  imports:  [
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRouting {}
