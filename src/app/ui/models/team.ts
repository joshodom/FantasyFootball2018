export class Team {
    qb: string;
    rb1: string;
    rb2: string;
    wr1: string;
    wr2: string;
    te: string;
    flex: string;
    k: string;
    defense: string;
    bn1: string;
    bn2: string;
    bn3: string;
    bn4: string;
    bn5: string;
    bn6: string;
    constructor(_qb: string, _rb1: string, _rb2: string, _wr1: string, _wr2: string, _te: string, _flex: string, _k: string, _defense: string, _bn1: string, _bn2: string, _bn3: string, _bn4: string, _bn5: string, _bn6: string) {
        this.qb = _qb;
        this.rb1 = _rb1;
        this.rb2 = _rb2;
        this.wr1 = _wr1;
        this.wr2 = _wr2;
        this.te = _te;
        this.flex = _flex;
        this.defense = _defense;
        this.bn1 = _bn1;
        this.bn2 = _bn2;
        this.bn3 = _bn3;
        this.bn4 = _bn4;
        this.bn5 = _bn5;
        this.bn6 = _bn6;
    }
}