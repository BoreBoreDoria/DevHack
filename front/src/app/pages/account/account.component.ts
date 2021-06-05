import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  activeTab = 'History';

  tabs = [
    {
      link: 'info',
      text: 'Info'
    },
    {
      link: 'history',
      text: 'History'
    }
  ];

  ngOnInit(): void {
  }

}
