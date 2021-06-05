import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FlowNameStatuses, FlowNameTypes} from "../../../../../../models/flow";

@Component({
  selector: 'app-flow-card',
  templateUrl: './flow-card.component.html',
  styleUrls: ['./flow-card.component.scss']
})
export class FlowCardComponent implements OnInit {

  @Input() title;
  @Input() type: FlowNameTypes;

  @Output() cardClick = new EventEmitter();

  flowNameTypes = FlowNameTypes;
  flowNameStatuses = FlowNameStatuses;

  constructor() { }

  ngOnInit(): void {
  }

}
