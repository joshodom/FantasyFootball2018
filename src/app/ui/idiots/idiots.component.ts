import { Component, OnInit } from '@angular/core';
import { manager } from '../models/manager';
import { Team } from '../models/team';

@Component({
  selector: 'idiots',
  templateUrl: './idiots.component.html',
  styleUrls: ['./idiots.component.css']
})
export class IdiotsComponent implements OnInit {
  managers: Array<manager>;
  constructor() {
    this.managers = new Array<manager>();
    let myTeam = new Team("qb", "rb", "rb2", "wr1", "wr2", "te", "flex", "k", "def", "bn1", "bn2", "bn3", "bn4", "bn5", "bn6");
    let finalTeam = new Team("qbz", "rbz", "rb2z", "wr1z", "wr2z", "tez", "flexz", "kz", "defz", "bn1z", "bn2z", "bn3z", "bn4z", "bn5z", "bn6z");
    this.managers.push(new manager(myTeam, finalTeam, "Test Team", 1));
    this.managers.push(new manager(myTeam, finalTeam, "Test Team2", 2));
    this.managers.push(new manager(myTeam, finalTeam, "Test Team3", 7));
  }

  ngOnInit() {
  }

}
