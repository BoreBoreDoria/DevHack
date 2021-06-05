import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {HistoryEventStatuses, HistoryEventTypes} from "../../../../../../models/history";

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {

  @Input() date;
  @Input() state: HistoryEventStatuses;
  @Input() type: HistoryEventTypes;
  @Input() title;
  @Input() value;

  @Output() repeatClick = new EventEmitter();

  historyEventStatuses = HistoryEventStatuses;
  historyEventTypes = HistoryEventTypes;

  constructor() { }

  ngOnInit(): void {
  }

}
