import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  templateUrl: './create-event.component.html'
})

export class CretateEventComponent {

  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['/events'])
  }

}
