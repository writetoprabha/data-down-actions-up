import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner-container',
  templateUrl: './inner-container.component.html',
  styleUrls: ['./inner-container.component.css']
})
export class InnerContainerComponent implements OnInit {
  @Input() name:string;
  @Output() eventFromInner = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendToOuter(){
    this.eventFromInner.emit(this.name);
  }
}
