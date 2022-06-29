import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../shared";


@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background: #e3C3C5;}
    .error ::-wekit-input-placeholder {color: #999;}
    .error ::-moz-input-placeholder {color: #999;}
    .error :-moz-input-placeholder {color: #999;}
  `]
})

export class CretateEventComponent {
  newEven: any;

  constructor(private router: Router,
              private eventService: EventService) {}


  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }

}
