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
    this.managers.push(new manager(myTeam, "Test Team", 1));
    this.managers.push(new manager(myTeam, "Test Team2", 2));
    this.managers.push(new manager(myTeam, "Test Team3", 7));
   }

  ngOnInit() {
  }

}
