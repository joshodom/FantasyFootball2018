import { Player } from "./player";

export class Team {
    players: Array<Player>;
    constructor() {
        this.players = new Array<Player>();
    }

    addPlayer(player: Player) : void {
        this.players.push(player);
    }
}