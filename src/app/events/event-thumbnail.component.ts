import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{ event.name | uppercase }}</h2>
    <div class="">
      <div>{{event?.date | date: 'shortDate'}}</div>
      <div [ngClass]="getStartTimeClass(event?.time)" [ngSwitch]="event?.time">
        {{event?.time}}
        <span *ngSwitchCase="'08:00 am'">(Early Starty)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Starty)</span>
        <span *ngSwitchDefault>(Normal Starty)</span>
      </div>
      <div>{{event?.price | currency: 'USD'}}</div>
      <div *ngIf="event?.location">
        Location:
          <span>{{event?.location.address}} &nbsp;</span>
          <span>{{event?.location.city}} &nbsp;</span>
          <span>{{event?.location.country}}</span>
      </div>
    </div>
  </div>
  `,
  styles: [
    ` .thumbnail {min-height: 210px}
      .green {color: green !important}
      .bold  {font-weight: bold !important}
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: any;

  constructor() {}

  getStartTimeClass(event: string) {
    return (event === '08:00 am') ? ['thumbnail', 'bold'] : [];
  }

}
