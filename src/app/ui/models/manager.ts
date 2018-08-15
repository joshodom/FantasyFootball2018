import { Team } from "./team";

export class manager {
    team: Team;
    teamName: string;
    place: number;
    constructor(_team: Team, _name: string, _place: number) {
        this.team = _team;
        this.teamName = _name;
        this.place = _place;   
    }
}