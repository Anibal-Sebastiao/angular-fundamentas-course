import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { EventService } from "./shared/event.service";

@Injectable()
export class EventGuard implements CanActivate {

  constructor(private eventService: EventService,
              private router: Router) {}

  canActivate (activatedRouter: ActivatedRouteSnapshot): any {

    const eventExists = this.eventService.getEvent(activatedRouter.params['id'])

    if(!eventExists) {
      this.router.navigate(['/404'])
      return false
    }

    return true;
  }

}
