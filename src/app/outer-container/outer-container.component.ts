import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-outer-container',
  templateUrl: './outer-container.component.html',
  styleUrls: ['./outer-container.component.css']
})
export class OuterContainerComponent implements OnInit {
  @Input() names:string[];
  @Output() eventFromOuter = new EventEmitter<string>();
  name:string = '';

  constructor() { }

  ngOnInit() {
  }

  eventFromInner(passed:string){
    console.log("event passed")
    this.name = passed;
    this.eventFromOuter.emit(this.name);
  }

}
