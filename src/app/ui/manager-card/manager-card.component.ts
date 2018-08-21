import { Component, OnInit, Input } from '@angular/core';
import { Manager } from '../models/manager';

@Component({
  selector: 'manager-card',
  templateUrl: './manager-card.component.html',
  styleUrls: ['./manager-card.component.css']
})
export class ManagerCardComponent implements OnInit {
  @Input() manager: Manager;
  _manager: Manager;
  constructor() {
  }

  ngOnInit() {
    this._manager = new Manager(this.manager.draftedTeam, this.manager.finalTeam, this.manager.teamName, this.manager.place, this.manager.bio, this.manager.WLT, this.manager.ptsFor, this.manager.ptsAgainst);
  }

}
