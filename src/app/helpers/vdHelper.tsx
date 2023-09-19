import { Team } from "../model/team";

export class VDResult {
    name: string;
    theoreticalWins: number;
    vd: number;

    constructor(name: string, theoreticalWins: number, vd: number) {
        this.name = name;
        this.theoreticalWins = theoreticalWins;
        this.vd = vd;
    }
}

export function calculateVd(teams: Team[], matchups: string[][]) {
    const 
    return teams.map(team => {
        // Find opponent

        // Find opponent's score
    })
}