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
        "Cameron isn't terrible like the rest of you assholes",
        "9-5-0",
        "1312.46",
        "1244.02"
      )
    );
    this.managers.push(
      new Manager(
        this.mitchDrafted(),
        this.mitchFinal(),
        'It\'s Over 9000!!!!',
        2,
        "Jesus fucking christ what can I say about this dork",
        "9-5-0",
        "1353.98",
        "1265.12"
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
    myTeam.addPlayer(new Player('Joe Williams', NFCTeams.SanFrancisco, Positions.RB));
    myTeam.addPlayer(new Player('Spencer Ware', AFCTeams.KansasCity, Positions.RB));
    return myTeam;
  }

  cameronFinal(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Peyton Barber', NFCTeams.TampaBay, Positions.RB));
    myTeam.addPlayer(new Player('Mike Davis', NFCTeams.Seattle, Positions.RB));
    myTeam.addPlayer(new Player('Zach Ertz', NFCTeams.Philadelphia, Positions.TE)); //
    myTeam.addPlayer(new Player('Kareem Hunt', AFCTeams.KansasCity, Positions.RB)); //
    myTeam.addPlayer(new Player('Duke Johnson Jr.', AFCTeams.Cleveland, Positions.RB)); //
    myTeam.addPlayer(new Player('Julio Jones', NFCTeams.Atlanta, Positions.WR)); //
    myTeam.addPlayer(new Player('Marshawn Lynch', AFCTeams.Oakland, Positions.RB)); //
    myTeam.addPlayer(new Player('Christian McCaffrey', NFCTeams.Carolina, Positions.RB));
    myTeam.addPlayer(new Player('Cam Newton', NFCTeams.Carolina, Positions.QB)); //
    myTeam.addPlayer(new Player('Theo Riddick', NFCTeams.Detroit, Positions.RB));
    myTeam.addPlayer(new Player('Sterling Shepard', NFCTeams.NewYork, Positions.WR));
    myTeam.addPlayer(new Player('Mike Wallace', AFCTeams.Baltimore, Positions.WR));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Washington', NFCTeams.Washington, Positions.DEF));
    myTeam.addPlayer(new Player('Carolina', NFCTeams.Carolina, Positions.DEF));
    return myTeam;
  }

  mitchDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  mitchFinal(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Peyton Barber', NFCTeams.TampaBay, Positions.RB));
    myTeam.addPlayer(new Player('Mike Davis', NFCTeams.Seattle, Positions.RB));
    myTeam.addPlayer(new Player('Zach Ertz', NFCTeams.Philadelphia, Positions.TE)); //
    myTeam.addPlayer(new Player('Kareem Hunt', AFCTeams.KansasCity, Positions.RB)); //
    myTeam.addPlayer(new Player('Duke Johnson Jr.', AFCTeams.Cleveland, Positions.RB)); //
    myTeam.addPlayer(new Player('Julio Jones', NFCTeams.Atlanta, Positions.WR)); //
    myTeam.addPlayer(new Player('Marshawn Lynch', AFCTeams.Oakland, Positions.RB)); //
    myTeam.addPlayer(new Player('Christian McCaffrey', NFCTeams.Carolina, Positions.RB));
    myTeam.addPlayer(new Player('Cam Newton', NFCTeams.Carolina, Positions.QB)); //
    myTeam.addPlayer(new Player('Theo Riddick', NFCTeams.Detroit, Positions.RB));
    myTeam.addPlayer(new Player('Sterling Shepard', NFCTeams.NewYork, Positions.WR));
    myTeam.addPlayer(new Player('Mike Wallace', AFCTeams.Baltimore, Positions.WR));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Washington', NFCTeams.Washington, Positions.DEF));
    myTeam.addPlayer(new Player('Carolina', NFCTeams.Carolina, Positions.DEF));
    return myTeam;
  }

  berhorstDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  orschelnDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  benDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  mikeDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  joshDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  ajDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  ryanDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  robbDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  steveDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  meDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', NFCTeams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', AFCTeams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', NFCTeams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', AFCTeams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', NFCTeams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', NFCTeams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', AFCTeams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', AFCTeams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', AFCTeams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', NFCTeams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', AFCTeams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', AFCTeams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', NFCTeams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', AFCTeams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', NFCTeams.Seattle, Positions.WR));
    return myTeam;
  }

  ngOnInit() { }
}
