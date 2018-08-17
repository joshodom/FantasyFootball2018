export class Player {
    name: string;
    team: string;
    position: string;

    constructor(_name: string, _team: string, _position: string) {
        this.name = _name;
        this.team = _team;
        this.position = _position;
    }
}