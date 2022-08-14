import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upvoted',
  templateUrl: './upvoted.component.html',
  styleUrls: ['./upvoted.component.css']
})
export class UpvotedComponent implements OnInit {


  @Input() count: number | undefined;
  @Input() set voted(val: boolean) {
    val ? this.iconColor = 'red' : this.iconColor = 'white'
  };
  @Output() vote = new EventEmitter<any>();

  iconColor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.vote.emit()
  }

}
