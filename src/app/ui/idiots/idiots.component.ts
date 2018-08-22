import { Component, OnInit } from '@angular/core';
import { Manager } from '../models/manager';
import { Team } from '../models/team';
import { Player } from '../models/player';

enum Teams {
  Arizona = "ARI",
  Atlanta = "ATL",
  Carolina = "CAR",
  Chicago = "CHI",
  Dallas = "DAL",
  Detroit = "DET",
  GreenBay = "GB",
  LAR = "LAR",
  Minnesota = "MIN",
  NewOrleans = "NO",
  NYG = "NYG",
  Philadelphia = "PHI",
  SanFrancisco = "SF",
  Seattle = "SEA",
  TampaBay = "TB",
  Washington = "WASH",
  Baltimore = 'BAL',
  Buffalo = 'BUF',
  Cincinnati = 'CIN',
  Cleveland = 'CLE',
  Denver = 'DEN',
  Houston = 'HOU',
  Indianapolis = 'IND',
  Jacksonville = 'JAC',
  KansasCity = 'KC',
  LAC = 'LAC',
  Miami = 'MIA',
  NewEngland = 'NE',
  NYJ = 'NYJ',
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
    myTeam.addPlayer(new Player('Julio Jones', Teams.Atlanta, Positions.WR));
    myTeam.addPlayer(new Player('Marshawn Lynch', Teams.Oakland, Positions.RB));
    myTeam.addPlayer(new Player('Kareem Hunt', Teams.KansasCity, Positions.RB));
    myTeam.addPlayer(new Player('Carlos Hyde', Teams.Cleveland, Positions.RB));
    myTeam.addPlayer(new Player('Martavis Bryant', Teams.Oakland, Positions.WR));
    myTeam.addPlayer(new Player('Brandon Marshall', Teams.Seattle, Positions.WR));
    myTeam.addPlayer(new Player('Adrian Peterson', Teams.Arizona, Positions.RB));
    myTeam.addPlayer(new Player('Zach Ertz', Teams.Philadelphia, Positions.TE));
    myTeam.addPlayer(new Player('Corey Coleman', Teams.Buffalo, Positions.WR));
    myTeam.addPlayer(new Player('Duke Johnson Jr.', Teams.Cleveland, Positions.RB));
    myTeam.addPlayer(new Player('Jamaal Charles', Teams.Denver, Positions.RB));
    myTeam.addPlayer(new Player('Cam Newton', Teams.Carolina, Positions.QB));
    myTeam.addPlayer(new Player('Buffalo', Teams.Buffalo, Positions.DEF));
    myTeam.addPlayer(new Player('Joe Williams', Teams.SanFrancisco, Positions.RB));
    myTeam.addPlayer(new Player('Spencer Ware', Teams.KansasCity, Positions.RB));
    return myTeam;
  }

  cameronFinal(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Peyton Barber', Teams.TampaBay, Positions.RB));
    myTeam.addPlayer(new Player('Mike Davis', Teams.Seattle, Positions.RB));
    myTeam.addPlayer(new Player('Zach Ertz', Teams.Philadelphia, Positions.TE));
    myTeam.addPlayer(new Player('Kareem Hunt', Teams.KansasCity, Positions.RB));
    myTeam.addPlayer(new Player('Duke Johnson Jr.', Teams.Cleveland, Positions.RB));
    myTeam.addPlayer(new Player('Julio Jones', Teams.Atlanta, Positions.WR));
    myTeam.addPlayer(new Player('Marshawn Lynch', Teams.Oakland, Positions.RB));
    myTeam.addPlayer(new Player('Christian McCaffrey', Teams.Carolina, Positions.RB));
    myTeam.addPlayer(new Player('Cam Newton', Teams.Carolina, Positions.QB));
    myTeam.addPlayer(new Player('Theo Riddick', Teams.Detroit, Positions.RB));
    myTeam.addPlayer(new Player('Sterling Shepard', Teams.NYG, Positions.WR));
    myTeam.addPlayer(new Player('Mike Wallace', Teams.Baltimore, Positions.WR));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Washington', Teams.Washington, Positions.DEF));
    myTeam.addPlayer(new Player('Carolina', Teams.Carolina, Positions.DEF));
    return myTeam;
  }

  mitchDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', Teams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', Teams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', Teams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', Teams.NYJ, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', Teams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', Teams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', Teams.Seattle, Positions.WR));
    return myTeam;
  }

  mitchFinal(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Peyton Barber', Teams.TampaBay, Positions.RB));
    myTeam.addPlayer(new Player('Mike Davis', Teams.Seattle, Positions.RB));
    myTeam.addPlayer(new Player('Zach Ertz', Teams.Philadelphia, Positions.TE)); //
    myTeam.addPlayer(new Player('Kareem Hunt', Teams.KansasCity, Positions.RB)); //
    myTeam.addPlayer(new Player('Duke Johnson Jr.', Teams.Cleveland, Positions.RB)); //
    myTeam.addPlayer(new Player('Julio Jones', Teams.Atlanta, Positions.WR)); //
    myTeam.addPlayer(new Player('Marshawn Lynch', Teams.Oakland, Positions.RB)); //
    myTeam.addPlayer(new Player('Christian McCaffrey', Teams.Carolina, Positions.RB));
    myTeam.addPlayer(new Player('Cam Newton', Teams.Carolina, Positions.QB)); //
    myTeam.addPlayer(new Player('Theo Riddick', Teams.Detroit, Positions.RB));
    myTeam.addPlayer(new Player('Sterling Shepard', Teams, Positions.WR));
    myTeam.addPlayer(new Player('Mike Wallace', Teams.Baltimore, Positions.WR));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Washington', Teams.Washington, Positions.DEF));
    myTeam.addPlayer(new Player('Carolina', Teams.Carolina, Positions.DEF));
    return myTeam;
  }

  berhorstDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Le\'Veon Bell', Teams.Pittsburgh, Positions.RB));
    myTeam.addPlayer(new Player('Aaron Rodgers', Teams.GreenBay, Positions.QB));
    myTeam.addPlayer(new Player('Doug Baldwin', Teams.Seattle, Positions.WR));
    myTeam.addPlayer(new Player('LeGarrette Blount', Teams.Detroit, Positions.RB));
    myTeam.addPlayer(new Player('Hunter Henry', Teams.LAC, Positions.TE));
    myTeam.addPlayer(new Player('DeSean Jackson', Teams.TampaBay, Positions.WR));
    myTeam.addPlayer(new Player('DeVante Parker', Teams.Miami, Positions.WR));
    myTeam.addPlayer(new Player('Seattle', Teams.Seattle, Positions.DEF));
    myTeam.addPlayer(new Player('Taylor Gabriel', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Jacquizz Rodgers', Teams.TampaBay, Positions.RB));
    myTeam.addPlayer(new Player('C.J. Prosise', Teams.Seattle, Positions.RB));
    myTeam.addPlayer(new Player('Corey Davis', Teams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Stephen Gostkowski', Teams.NewEngland, Positions.K));
    myTeam.addPlayer(new Player('Eli Manning', Teams.NYG, Positions.QB));
    myTeam.addPlayer(new Player('John Ross', Teams.Cincinnati, Positions.WR));
    return myTeam;
  }

  orschelnDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Melvin Gordon', Teams.LAC, Positions.RB));
    myTeam.addPlayer(new Player('Ezekiel Elliott', Teams.Dallas, Positions.RB));
    myTeam.addPlayer(new Player('Terrelle Pryor Sr.', Teams.NYJ, Positions.WR));
    myTeam.addPlayer(new Player('Ameer Abdullah', Teams.Detroit, Positions.RB));
    myTeam.addPlayer(new Player('Davante Adams', Teams.GreenBay, Positions.WR));
    myTeam.addPlayer(new Player('Darren McFadden', Teams.Dallas, Positions.RB));
    myTeam.addPlayer(new Player('Stefon Diggs', Teams.Minnesota, Positions.WR));
    myTeam.addPlayer(new Player('Kirk Cousins', Teams.Minnesota, Positions.QB));
    myTeam.addPlayer(new Player('Delanie Walker', Teams.Tennessee, Positions.TE));
    myTeam.addPlayer(new Player('John Brown', Teams.Baltimore, Positions.WR));
    myTeam.addPlayer(new Player('James White', Teams.NewEngland, Positions.RB));
    myTeam.addPlayer(new Player('Zay Jones', Teams.Buffalo, Positions.WR));
    myTeam.addPlayer(new Player('Arizona', Teams.Arizona, Positions.DEF));
    myTeam.addPlayer(new Player('Brandon McManus', Teams.Denver, Positions.K));
    myTeam.addPlayer(new Player('Kenny Britt', Teams.NewEngland, Positions.WR));
    return myTeam;
  }

  benDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('A.J. Green', Teams.Cincinnati, Positions.WR));
    myTeam.addPlayer(new Player('DeMarco Murray', Teams.Tennessee, Positions.));
    myTeam.addPlayer(new Player('Ty Montgomery', Teams.GreenBay, Positions.));
    myTeam.addPlayer(new Player('Joe Mixon', Teams.Cincinnati, Positions.));
    myTeam.addPlayer(new Player('Larry Fitzgerald', Teams.Arizona, Positions.));
    myTeam.addPlayer(new Player('Emmanuel Sanders', Teams.Denver, Positions.));
    myTeam.addPlayer(new Player('Matt Ryan', Teams.Atlanta, Positions.));
    myTeam.addPlayer(new Player('Jeremy Maclin', Teams.Baltimore, Positions.));
    myTeam.addPlayer(new Player('Eric Ebron', Teams.Indianapolis, Positions.));
    myTeam.addPlayer(new Player('Dak Prescott', Teams.Dallas, Positions.));
    myTeam.addPlayer(new Player('Kansas City', Teams.KansasCity, Positions.));
    myTeam.addPlayer(new Player('Antonio Gates', Teams.LAC, Positions.));
    myTeam.addPlayer(new Player('Torrey Smith', Teams.Carolina, Positions.));
    myTeam.addPlayer(new Player('Danny Amendola', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Sebastian Janikowski', Teams., Positions.));
    return myTeam;
  }

  mikeDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', Teams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', Teams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', Teams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', Teams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', Teams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', Teams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', Teams.Seattle, Positions.WR));
    return myTeam;
  }

  joshDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', Teams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', Teams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', Teams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', Teams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', Teams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', Teams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', Teams.Seattle, Positions.WR));
    return myTeam;
  }

  ajDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', Teams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', Teams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', Teams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', Teams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', Teams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', Teams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', Teams.Seattle, Positions.WR));
    return myTeam;
  }

  ryanDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', Teams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', Teams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', Teams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', Teams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', Teams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', Teams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', Teams.Seattle, Positions.WR));
    return myTeam;
  }

  robbDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', Teams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', Teams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', Teams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', Teams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', Teams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', Teams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', Teams.Seattle, Positions.WR));
    return myTeam;
  }

  steveDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', Teams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', Teams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', Teams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', Teams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', Teams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', Teams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', Teams.Seattle, Positions.WR));
    return myTeam;
  }

  meDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jay Ajayi', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Leonard Fournette', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Alshon Jeffery', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tom Brady', Teams.NewEngland, Positions.QB));
    myTeam.addPlayer(new Player('Jordan Reed', Teams.Washington, Positions.TE));
    myTeam.addPlayer(new Player('Jamison Crowder', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Jordan Matthews', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Rishard Matthews', Teams.Tennessee, Positions.WR));
    myTeam.addPlayer(new Player('Thomas Rawls', Teams.NewYork, Positions.RB));
    myTeam.addPlayer(new Player('Kevin White', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Houston', Teams.Houston, Positions.DEF));
    myTeam.addPlayer(new Player('Justin Tucker', Teams.Baltimore, Positions.K));
    myTeam.addPlayer(new Player('Carson Wentz', Teams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Dwayne Allen', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Tyler Lockett', Teams.Seattle, Positions.WR));
    return myTeam;
  }

  ngOnInit() { }
}
