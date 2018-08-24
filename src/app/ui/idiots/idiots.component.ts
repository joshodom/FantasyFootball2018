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
    this.managers.push(
      new Manager(
        this.orschelnDrafted(),
        this.orschelnFinal(),
        'Just Saiyan...',
        3,
        "What a mediocre team, yet here we are..",
        "8-6-0",
        "1362.32",
        "1369.78"
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
    myTeam.addPlayer(new Player('Jay Ajayi', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Trey Burton', Teams.Philadelphia, Positions.TE));
    myTeam.addPlayer(new Player('Nick Foles', Teams.Philadelphia, Positions.QB));
    myTeam.addPlayer(new Player('Leonard Fournette', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Antonio Gates', Teams.LAC, Positions.TE));
    myTeam.addPlayer(new Player('Tion Green', Teams.Detroit, Positions.RB));
    myTeam.addPlayer(new Player('DeAndre Hopkins', Teams.Houston, Positions.WR));
    myTeam.addPlayer(new Player('Jesse James', Teams.Pittsburgh, Positions.TE));
    myTeam.addPlayer(new Player('Alshon Jeffery', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Tyler Lockett', Teams.Seattle, Positions.WR));
    myTeam.addPlayer(new Player('Samaje Perine', Teams.Washington, Positions.RB));
    myTeam.addPlayer(new Player('Mohamed Sanu', Teams.Atlanta, Positions.WR));
    myTeam.addPlayer(new Player('Matthew Stafford', Teams.Detroit, Positions.QB));
    myTeam.addPlayer(new Player('Matt Bryant', Teams.Atlanta, Positions.K));
    myTeam.addPlayer(new Player('Minnesota', Teams.Minnesota, Positions.DEF));
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

  berhorstFinal(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Doug Baldwin', Teams.Seattle, Positions.WR));
    myTeam.addPlayer(new Player('Le\'Veon Bell', Teams.Pittsburgh, Positions.RB));
    myTeam.addPlayer(new Player('LeGarrette Blount', Teams.Detroit, Positions.RB));
    myTeam.addPlayer(new Player('Blake Bortles', Teams.Jacksonville, Positions.QB));
    myTeam.addPlayer(new Player('Corey Clement', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Keelan Cole', Teams.Jacksonville, Positions.WR));
    myTeam.addPlayer(new Player('DeSean Jackson', Teams.TampaBay, Positions.WR));
    myTeam.addPlayer(new Player('Alvin Kamara', Teams.NewOrleans, Positions.RB));
    myTeam.addPlayer(new Player('Cordarrelle Patterson', Teams.Oakland, Positions.WR));
    myTeam.addPlayer(new Player('Jameis Winston', Teams.TampaBay, Positions.QB));
    myTeam.addPlayer(new Player('Stephen Gostkowski', Teams.NewEngland, Positions.K));
    myTeam.addPlayer(new Player('Jason Witten', Teams.Dallas, Positions.TE));
    myTeam.addPlayer(new Player('Robert Woods', Teams.LAR, Positions.WR));
    myTeam.addPlayer(new Player('Los Angeles', Teams.LAC, Positions.DEF));
    myTeam.addPlayer(new Player('Seattle', Teams.Seattle, Positions.DEF));
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

  orschelnFinal(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Kirk Cousins', Teams.Minnesota, Positions.QB));
    myTeam.addPlayer(new Player('Jamison Crowder', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Stefon Diggs', Teams.Minnesota, Positions.WR));
    myTeam.addPlayer(new Player('Ezekiel Elliott', Teams.Dallas, Positions.RB));
    myTeam.addPlayer(new Player('Devin Funchess', Teams.Carolina, Positions.WR));
    myTeam.addPlayer(new Player('Melvin Gordon', Teams.LAC, Positions.RB));
    myTeam.addPlayer(new Player('Chris Ivory', Teams.Jacksonville, Positions.RB));
    myTeam.addPlayer(new Player('Jarvis Landry', Teams.Cleveland, Positions.WR));
    myTeam.addPlayer(new Player('Jerick McKinnon', Teams.Minnesota, Positions.RB));
    myTeam.addPlayer(new Player('Elijhaa Penny', Teams.Arizona, Positions.RB));
    myTeam.addPlayer(new Player('Jonathan Stewart', Teams.NYG, Positions.RB));
    myTeam.addPlayer(new Player('Tyrod Taylor', Teams.Buffalo, Positions.QB));
    myTeam.addPlayer(new Player('Delanie Walker', Teams.Tennessee, Positions.TE));
    myTeam.addPlayer(new Player('Jake Elliott', Teams.Philadelphia, Positions.K));
    myTeam.addPlayer(new Player('Arizona', Teams.Arizona, Positions.DEF));
    
    
    // myTeam.addPlayer(new Player('Terrelle Pryor Sr.', Teams.NYJ, Positions.WR));
    // myTeam.addPlayer(new Player('Ameer Abdullah', Teams.Detroit, Positions.RB));
    // myTeam.addPlayer(new Player('Davante Adams', Teams.GreenBay, Positions.WR));
    // myTeam.addPlayer(new Player('Darren McFadden', Teams.Dallas, Positions.RB));
    // myTeam.addPlayer(new Player('John Brown', Teams.Baltimore, Positions.WR));
    // myTeam.addPlayer(new Player('James White', Teams.NewEngland, Positions.RB));
    // myTeam.addPlayer(new Player('Zay Jones', Teams.Buffalo, Positions.WR));
    // myTeam.addPlayer(new Player('Brandon McManus', Teams.Denver, Positions.K));
    // myTeam.addPlayer(new Player('Kenny Britt', Teams.NewEngland, Positions.WR));
    return myTeam;
  }

  benDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('A.J. Green', Teams.Cincinnati, Positions.WR));
    myTeam.addPlayer(new Player('DeMarco Murray', Teams.Tennessee, Positions.RB));
    myTeam.addPlayer(new Player('Ty Montgomery', Teams.GreenBay, Positions.RB));
    myTeam.addPlayer(new Player('Joe Mixon', Teams.Cincinnati, Positions.RB));
    myTeam.addPlayer(new Player('Larry Fitzgerald', Teams.Arizona, Positions.WR));
    myTeam.addPlayer(new Player('Emmanuel Sanders', Teams.Denver, Positions.WR));
    myTeam.addPlayer(new Player('Matt Ryan', Teams.Atlanta, Positions.QB));
    myTeam.addPlayer(new Player('Jeremy Maclin', Teams.Baltimore, Positions.WR));
    myTeam.addPlayer(new Player('Eric Ebron', Teams.Indianapolis, Positions.TE));
    myTeam.addPlayer(new Player('Dak Prescott', Teams.Dallas, Positions.QB));
    myTeam.addPlayer(new Player('Kansas City', Teams.KansasCity, Positions.DEF));
    myTeam.addPlayer(new Player('Antonio Gates', Teams.LAC, Positions.TE));
    myTeam.addPlayer(new Player('Torrey Smith', Teams.Carolina, Positions.WR));
    myTeam.addPlayer(new Player('Danny Amendola', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Sebastian Janikowski', Teams.Seattle, Positions.K));
    return myTeam;
  }

  mikeDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Jordan Howard', Teams.Chicago, Positions.RB));
    myTeam.addPlayer(new Player('Jordy Nelson', Teams.Oakland, Positions.WR));
    myTeam.addPlayer(new Player('Bilal Powell', Teams.NYJ, Positions.RB));
    myTeam.addPlayer(new Player('Demaryius Thomas', Teams.Denver, Positions.WR));
    myTeam.addPlayer(new Player('Jimmy Graham', Teams.GreenBay, Positions.TE));
    myTeam.addPlayer(new Player('Drew Brees', Teams.NewOrleans, Positions.QB));
    myTeam.addPlayer(new Player('Jonathan Stewart', Teams.NYG, Positions.RB));
    myTeam.addPlayer(new Player('Darrick Henry', Teams.Tennessee, Positions.RB));
    myTeam.addPlayer(new Player('Tyrell Williams', Teams.LAC, Positions.WR));
    myTeam.addPlayer(new Player('Chris Hogan', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Mike Wallace', Teams.Philadelphia, Positions.WR));
    myTeam.addPlayer(new Player('Denver', Teams.Denver, Positions.DEF));
    myTeam.addPlayer(new Player('Dion Lewis', Teams.Tennessee, Positions.RB));
    myTeam.addPlayer(new Player('Matt Bryant', Teams.Atlanta, Positions.K));
    myTeam.addPlayer(new Player('Cameron Brate', Teams.TampaBay, Positions.TE));
    return myTeam;
  }

  joshDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Mike Evans', Teams.TampaBay, Positions.WR));
    myTeam.addPlayer(new Player('Michael Thomas', Teams.NewOrleans, Positions.WR));
    myTeam.addPlayer(new Player('Christian McCaffrey', Teams.Carolina, Positions.RB));
    myTeam.addPlayer(new Player('Kelvin Benjamin', Teams.Buffalo, Positions.WR));
    myTeam.addPlayer(new Player('Frank Gore', Teams.Miami, Positions.RB));
    myTeam.addPlayer(new Player('Mark Ingram', Teams.NewOrleans, Positions.RB));
    myTeam.addPlayer(new Player('Marcus Mariota', Teams.Tennessee, Positions.QB));
    myTeam.addPlayer(new Player('Danny Woodhead', Teams.Baltimore, Positions.RB));
    myTeam.addPlayer(new Player('Marvin Jones Jr.', Teams.Detroit, Positions.WR));
    myTeam.addPlayer(new Player('Jack Doyle', Teams.Indianapolis, Positions.TE));
    myTeam.addPlayer(new Player('Andrew Luck', Teams.Indianapolis, Positions.QB));
    myTeam.addPlayer(new Player('Austin Hooper', Teams.Atlanta, Positions.TE));
    myTeam.addPlayer(new Player('Jonathan Williams', Teams.NewOrleans, Positions.RB));
    myTeam.addPlayer(new Player('Carolina', Teams.Carolina, Positions.DEF));
    myTeam.addPlayer(new Player('Wil Lutz', Teams.NewOrleans, Positions.K));
    return myTeam;
  }

  ajDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('David Johnson', Teams.Arizona, Positions.RB));
    myTeam.addPlayer(new Player('Dalvin Cook', Teams.Minnesota, Positions.RB));
    myTeam.addPlayer(new Player('Rob Gronkowski', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Keenan Allen', Teams.LAC, Positions.WR));
    myTeam.addPlayer(new Player('Allen Robinson II', Teams.Chicago, Positions.WR));
    myTeam.addPlayer(new Player('Paul Perkins', Teams.NYG, Positions.RB));
    myTeam.addPlayer(new Player('Rob Kelley', Teams.Washington, Positions.RB));
    myTeam.addPlayer(new Player('Eric Decker', Teams.NewEngland, Positions.WR));
    myTeam.addPlayer(new Player('Derek Carr', Teams.Oakland, Positions.QB));
    myTeam.addPlayer(new Player('Adam Thielen', Teams.Minnesota, Positions.WR));
    myTeam.addPlayer(new Player('Matt Forte', Teams.NYJ, Positions.RB));
    myTeam.addPlayer(new Player('Josh Doctson', Teams.Washington, Positions.WR));
    myTeam.addPlayer(new Player('Minnesota', Teams.Minnesota, Positions.DEF));
    myTeam.addPlayer(new Player('Deshaun Watson', Teams.Houston, Positions.QB));
    myTeam.addPlayer(new Player('Dan Bailey', Teams.Dallas, Positions.K));
    return myTeam;
  }

  ryanDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Antonio Brown', Teams.Pittsburgh, Positions.WR));
    myTeam.addPlayer(new Player('T.Y. Hilton', Teams.Indianapolis, Positions.WR));
    myTeam.addPlayer(new Player('Travis Kelce', Teams.KansasCity, Positions.TE));
    myTeam.addPlayer(new Player('Greg Olsen', Teams.Carolina, Positions.TE));
    myTeam.addPlayer(new Player('Tyreek Hill', Teams.KansasCity, Positions.WR));
    myTeam.addPlayer(new Player('Jarvis Landry', Teams.Cleveland, Positions.WR));
    myTeam.addPlayer(new Player('Eddie Lacy', Teams.Seattle, Positions.RB));
    myTeam.addPlayer(new Player('Latavius Murray', Teams.Minnesota, Positions.RB));
    myTeam.addPlayer(new Player('Jeremy Hill', Teams.NewEngland, Positions.RB));
    myTeam.addPlayer(new Player('Darren Sproles', Teams.Philadelphia, Positions.RB));
    myTeam.addPlayer(new Player('Randall Cobb', Teams.GreenBay, Positions.WR));
    myTeam.addPlayer(new Player('Philip Rivers', Teams.LAC, Positions.QB));
    myTeam.addPlayer(new Player('Marlon Mack', Teams.Indianapolis, Positions.RB));
    myTeam.addPlayer(new Player('Los Angeles', Teams.LAR, Positions.DEF));
    myTeam.addPlayer(new Player('Stephen Hauschka', Teams.Buffalo, Positions.K));
    return myTeam;
  }

  robbDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('LeSean McCoy', Teams.Buffalo, Positions.RB));
    myTeam.addPlayer(new Player('Dez Bryant', Teams.Dallas, Positions.WR));
    myTeam.addPlayer(new Player('Lamar Miller', Teams.Houston, Positions.RB));
    myTeam.addPlayer(new Player('DeAndre Hopkins', Teams.Houston, Positions.WR));
    myTeam.addPlayer(new Player('Mike Gillislee', Teams.NewEngland, Positions.RB));
    myTeam.addPlayer(new Player('Sammy Watkins', Teams.KansasCity, Positions.WR));
    myTeam.addPlayer(new Player('Tyler Eifert', Teams.Cincinnati, Positions.TE));
    myTeam.addPlayer(new Player('Donte Moncrief', Teams.Jacksonville, Positions.WR));
    myTeam.addPlayer(new Player('Jameis Winston', Teams.TampaBay, Positions.QB));
    myTeam.addPlayer(new Player('Ben Roethlisberger', Teams.Pittsburgh, Positions.QB));
    myTeam.addPlayer(new Player('Coby Fleener', Teams.NewOrleans, Positions.TE));
    myTeam.addPlayer(new Player('Giovani Bernard', Teams.Cincinnati, Positions.RB));
    myTeam.addPlayer(new Player('New England', Teams.NewEngland, Positions.DEF));
    myTeam.addPlayer(new Player('DeAndre Washington', Teams.Oakland, Positions.RB));
    myTeam.addPlayer(new Player('Adam Vinatieri', Teams.Indianapolis, Positions.K));
    return myTeam;
  }

  steveDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Odell Beckham Jr.', Teams.NYG, Positions.WR));
    myTeam.addPlayer(new Player('Todd Gurley II', Teams.LAC, Positions.RB));
    myTeam.addPlayer(new Player('Amari Cooper', Teams.Oakland, Positions.WR));
    myTeam.addPlayer(new Player('C.J. Anderson', Teams.Carolina, Positions.RB));
    myTeam.addPlayer(new Player('Golden Tate', Teams.Detroit, Positions.WR));
    myTeam.addPlayer(new Player('Terrance West', Teams.NewOrleans, Positions.RB));
    myTeam.addPlayer(new Player('Willie Snead IV', Teams.Baltimore, Positions.WR));
    myTeam.addPlayer(new Player('Samaje Perine', Teams.Washington, Positions.RB));
    myTeam.addPlayer(new Player('Kyle Rudolph', Teams.Minnesota, Positions.TE));
    myTeam.addPlayer(new Player('Jamaal Williams', Teams.GreenBay, Positions.RB ));
    myTeam.addPlayer(new Player('Matthew Stafford', Teams.Detroit, Positions.QB));
    myTeam.addPlayer(new Player('Pittsburgh', Teams.Pittsburgh, Positions.DEF));
    myTeam.addPlayer(new Player('Robby Anderson', Teams.NYJ, Positions.WR));
    myTeam.addPlayer(new Player('Robert Turbin', Teams.Indianapolis, Positions.RB));
    myTeam.addPlayer(new Player('Matt Prater', Teams.Detroit, Positions.K));
    return myTeam;
  }

  meDrafted(): Team {
    var myTeam = new Team();
    myTeam.addPlayer(new Player('Devonta Freeman', Teams.Atlanta, Positions.RB));
    myTeam.addPlayer(new Player('Isaiah Crowell', Teams.NYJ, Positions.RB));
    myTeam.addPlayer(new Player('Brandin Cooks', Teams.LAR, Positions.WR));
    myTeam.addPlayer(new Player('Doug Martin', Teams.Oakland, Positions.RB));
    myTeam.addPlayer(new Player('Michael Grabtree', Teams.Baltimore, Positions.WR));
    myTeam.addPlayer(new Player('Russell Wilson', Teams.Seattle, Positions.QB));
    myTeam.addPlayer(new Player('Tevin Coleman', Teams.Atlanta, Positions.RB));
    myTeam.addPlayer(new Player('Martellus Bennett', Teams.NewEngland, Positions.TE));
    myTeam.addPlayer(new Player('Pierre Garcon', Teams.SanFrancisco, Positions.WR));
    myTeam.addPlayer(new Player('Theo Riddick', Teams.Detroit, Positions.RB));
    myTeam.addPlayer(new Player('Ted Ginn Jr.', Teams.NewOrleans, Positions.WR));
    myTeam.addPlayer(new Player('Kenny Golladay', Teams.Detroit, Positions.WR));
    myTeam.addPlayer(new Player('Carson Palmer', Teams.Arizona, Positions.QB));
    myTeam.addPlayer(new Player('Mason Crosby', Teams.GreenBay, Positions.K));
    myTeam.addPlayer(new Player('Baltimore', Teams.Baltimore, Positions.DEF));
    return myTeam;
  }

  ngOnInit() { }
}
