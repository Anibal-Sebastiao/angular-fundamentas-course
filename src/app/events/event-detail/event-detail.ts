import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISession } from "../shared";
import { EventService } from "../shared/event.service";

@Component({
    templateUrl: './event-detail.html',
    styles: [`
      .container {
        padding: 0 20px;
      }
      .event-image {
        height: 100px;
      }
    `]
})

export class EventDetailComponent implements OnInit {

  event: any;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService,
              private route: ActivatedRoute ){}


  ngOnInit() {

    this.route.params.forEach((param: any) => this.event = this.eventService.getEvent(+param.id))

  }


  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map((sessions: any) => sessions.id))

    session.id =nextId;
    this.event.sessions.push(session);

    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelSession() {
    this.addMode = false;
  }

}
