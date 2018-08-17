import { Component, OnInit, Input } from '@angular/core';
import { manager } from '../models/manager';

@Component({
  selector: 'manager-card',
  templateUrl: './manager-card.component.html',
  styleUrls: ['./manager-card.component.css']
})
export class ManagerCardComponent implements OnInit {
  @Input() manager: manager;
  _manager: manager;
  constructor() {
  }

  ngOnInit() {
    this._manager = new manager(this.manager.draftedTeam, this.manager.finalTeam, this.manager.teamName, this.manager.place);
  }

}
