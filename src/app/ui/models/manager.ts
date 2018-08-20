import { Team } from "./team";

export class Manager {
    draftedTeam: Team;
    finalTeam: Team;
    teamName: string;
    place: number;
    bio: string;
    constructor(_draftedTeam: Team, _finalTeam: Team, _name: string, _place: number, _bio: string) {
        this.draftedTeam = _draftedTeam;
        this.finalTeam = _finalTeam;
        this.teamName = _name;
        this.place = _place;
        this.bio = _bio;
    }
}