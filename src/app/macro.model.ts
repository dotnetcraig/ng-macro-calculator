export class Macro {
    grams: number = 0;
    constructor(
        public calories: number,
        divider: number
    ) {
        this.grams = Math.round(calories / divider);
    }
}