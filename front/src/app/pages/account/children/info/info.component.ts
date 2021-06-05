import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  activeTab = 'Info';

  tabs = [
    'Info',
    'History'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
