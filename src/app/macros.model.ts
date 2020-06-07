import { Macro } from './macro.model'

export class Macros {
    public protein: Macro;
    public carbs: Macro;
    public fats: Macro;

    constructor(
        protein: number,
        carbs: number,
        fats: number
    ){
        this.protein = new Macro(protein, 4);
        this.carbs = new Macro(carbs, 4);
        this.fats = new Macro(fats, 9);
    }
}