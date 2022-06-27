import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService,
              private router: ActivatedRoute) {}

  ngOnInit(): void{
   this.events = this.router.snapshot.data['events'];
  }

}
