import { Component, OnInit } from '@angular/core';
import { Manager } from '../models/manager';
import { Team } from '../models/team';
import { Player } from '../models/player';

enum NFCTeams {
  Arizona = "ARI",
  Atlanta = "ATL",
  Carolina = "CAR",
  Chicago = "CHI",
  Dallas = "DAL",
  Detroit = "DET",
  GreenBay = "GB",
  LosAngeles = "LAR",
  Minnesota = "MIN",
  NewOrleans = "NO",
  NewYork = "NYG",
  Philadelphia = "PHI",
  SanFrancisco = "SF",
  Seattle = "SEA",
  TampaBay = "TB",
  Washington = "WASH"
};

enum AFCTeams {
  Baltimore = 'BAL',
  Buffalo = 'BUF',
  Cincinnati = 'CIN',
  Cleveland = 'CLE',
  Denver = 'DEN',
  Houston = 'HOU',
  Indianapolis = 'IND',
  Jacksonville = 'JAC',
  KansasCity = 'KC',
  LosAngeles = 'LAC',
  Miami = 'MIA',
  NewEngland = 'NE',
  NewYork = 'NYJ',
  Oakland = 'OAK',
  Pittsburgh = 'PIT',
  Tennessee = 'TEN'
};

enum Positions {
  RB = "RB",
  QB = "QB",
  WR = "WR",
  K = "K",
  DEF = "DEF",
  TE = "TE"
};

@Component({
  selector: 'idiots',
  templateUrl: './idiots.component.html',
  styleUrls: ['./idiots.component.css']
})
export class IdiotsComponent implements OnInit {
  managers: Array<Manager>;
  constructor() {
    this.managers = new Array<Manager>();
    this.managers.push(
      new Manager(
        this.cameronDrafted(),
        this.cameronFinal(),
        'No One Fights Alone',
        1,
        "Cameron isn't terrible like the rest of you assholes"
      )
    );
  }

  cameronDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Julio Jones', NFCTeams.Atlanta, Positions.WR));
    myTeam.addPlayer(
      new Player('Marshawn Lynch', AFCTeams.Oakland, Positions.RB)
    );
    myTeam.addPlayer(
      new Player('Kareem Hunt', AFCTeams.KansasCity, Positions.RB)
    );
    myTeam.addPlayer(
      new Player('Carlos Hyde', AFCTeams.Cleveland, Positions.RB)
    );
    myTeam.addPlayer(
      new Player('Martavis Bryant', AFCTeams.Oakland, Positions.WR)
    );
    myTeam.addPlayer(
      new Player('Brandon Marshall', NFCTeams.Seattle, Positions.WR)
    );
    myTeam.addPlayer(
      new Player('Adrian Peterson', NFCTeams.Arizona, Positions.RB)
    );
    myTeam.addPlayer(
      new Player('Zach Ertz', NFCTeams.Philadelphia, Positions.TE)
    );
    myTeam.addPlayer(
      new Player('Corey Coleman', AFCTeams.Buffalo, Positions.WR)
    );
    myTeam.addPlayer(
      new Player('Duke Johnson Jr.', AFCTeams.Cleveland, Positions.RB)
    );
    myTeam.addPlayer(
      new Player('Jamaal Charles', AFCTeams.Denver, Positions.RB)
    );
    myTeam.addPlayer(new Player('Cam Newton', NFCTeams.Carolina, Positions.QB));
    myTeam.addPlayer(new Player('Buffalo', AFCTeams.Buffalo, Positions.DEF));
    myTeam.addPlayer(
      new Player('Joe Williams', NFCTeams.SanFrancisco, Positions.RB)
    );
    myTeam.addPlayer(
      new Player('Spencer Ware', AFCTeams.KansasCity, Positions.RB)
    );
    return myTeam;
  }

  cameronFinal(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(
      new Player('Peyton Barber', NFCTeams.TampaBay, Positions.RB)
    );
    myTeam.addPlayer(new Player('Mike Davis', NFCTeams.Seattle, Positions.RB));
    myTeam.addPlayer(
      new Player('Zach Ertz', NFCTeams.Philadelphia, Positions.TE)
    ); //
    myTeam.addPlayer(
      new Player('Kareem Hunt', AFCTeams.KansasCity, Positions.RB)
    ); //
    myTeam.addPlayer(
      new Player('Duke Johnson Jr.', AFCTeams.Cleveland, Positions.RB)
    ); //
    myTeam.addPlayer(new Player('Julio Jones', NFCTeams.Atlanta, Positions.WR)); //
    myTeam.addPlayer(
      new Player('Marshawn Lynch', AFCTeams.Oakland, Positions.RB)
    ); //
    myTeam.addPlayer(
      new Player('Christian McCaffrey', NFCTeams.Carolina, Positions.RB)
    );
    myTeam.addPlayer(new Player('Cam Newton', NFCTeams.Carolina, Positions.QB)); //
    myTeam.addPlayer(
      new Player('Theo Riddick', NFCTeams.Detroit, Positions.RB)
    );
    myTeam.addPlayer(
      new Player('Sterling Shepard', NFCTeams.NewYork, Positions.WR)
    );
    myTeam.addPlayer(
      new Player('Mike Wallace', AFCTeams.Baltimore, Positions.WR)
    );
    myTeam.addPlayer(
      new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K)
    );
    myTeam.addPlayer(
      new Player('Washington', NFCTeams.Washington, Positions.DEF)
    );
    myTeam.addPlayer(new Player('Carolina', NFCTeams.Carolina, Positions.DEF));
    return myTeam;
  }

  ngOnInit() {}
}
