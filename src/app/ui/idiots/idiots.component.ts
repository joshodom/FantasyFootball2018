import { Component, OnInit } from '@angular/core';
import { Manager } from '../models/manager';
import { Team } from '../models/team';
import { Player } from '../models/player';

enum NFCTeams {
  Arizona = "Arizona Cardinals",
  Atlanta = "Atlanta Falcons",
  Carolina = "Carolina Panthers",
  Chicago = "Chicago Bears",
  Dallas = "Dallas Cowboys",
  Detroit = "Detroit Lions",
  GreenBay = "Green Bay Packers",
  LosAngeles = "Los Angeles Rams",
  Minnesota = "Minnesota Vikings",
  NewOrleans = "New Orleans Saints",
  NewYork = "New York Giants",
  Philadelphia = "Philadelphia Eagles",
  SanFrancisco = "San Francisco 49ers",
  Seattle = "Seattle Seahawks",
  TampaBay = "Tampa Bay Buccaneers",
  Washington = "Washington Redskins"
};

enum AFCTeams {
  Baltimore = 'Baltimore Ravens',
  Buffalo = 'Buffalo Bills',
  Cincinnati = 'Cincinatti Bengals',
  Cleveland = 'Cleveland Browns',
  Denver = 'Denver Broncos',
  Houston = 'Houston Texans',
  Indianapolis = 'Indianapolis Colts',
  Jacksonville = 'Jacksonville Jaguars',
  KansasCity = 'Kansas City Chiefs',
  LosAngeles = 'Los Angeles Chargers',
  Miami = 'Miami Dolphins',
  NewEngland = 'New England Patriots',
  NewYork = 'New York Jets',
  Oakland = 'Oakland Raiders',
  Pittsburgh = 'Pittsburgh Steelers',
  Tennessee = 'Tennessee Titans'
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
        1
      )
    );
    // let myTeam = new Team("qb", "rb", "rb2", "wr1", "wr2", "te", "flex", "k", "def", "bn1", "bn2", "bn3", "bn4", "bn5", "bn6");
    // let finalTeam = new Team("qbz", "rbz", "rb2z", "wr1z", "wr2z", "tez", "flexz", "kz", "defz", "bn1z", "bn2z", "bn3z", "bn4z", "bn5z", "bn6z");
    // this.managers.push(new Manager(myTeam, finalTeam, "Test Team", 1));
    // this.managers.push(new Manager(myTeam, finalTeam, "Test Team2", 2));
    // this.managers.push(new Manager(myTeam, finalTeam, "Test Team3", 7));
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
