import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
    <h2>{{ event.name }}</h2>
    <div class="">
      <div>{{event.date}}</div>
      <div>{{event.time}}</div>
      <div>\${{event.price}}</div>
      <div>
        Location:
          <span>{{event.location.address}} &nbsp;</span>
          <span>{{event.location.city}} &nbsp;</span>
          <span>{{event.location.country}}</span>
      </div>
    </div>
  </div>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;

  log() {
    console.log('Thumbnail Component');
  }
}
