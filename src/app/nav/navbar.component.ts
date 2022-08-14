import { Component } from "@angular/core";
import { EventService, ISession } from "../events/shared";
import { AuthService } from "../user/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {font-size: 15px}
      #searchForm {margin-right: 100px}
      @media (max-width: 1200px) {#searchForm {display: none}}
    `
  ]
})
export class NavBarComponent {
  searchTerm: string = ''
  foundSessions: ISession[] = []
  constructor (public auth: AuthService,
               private eventService: EventService) {}

  searchSession(searchTerm: string) {
    this.eventService.searchSession(searchTerm).subscribe((sessions: ISession[]) => this.foundSessions = sessions)
  }
}
