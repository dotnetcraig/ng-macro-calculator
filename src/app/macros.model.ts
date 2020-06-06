export class Macros {
    constructor(
        private protein: number,
        private carbs: number,
        private fats: number
    ){}

    // return calorie: gram
    // get proteinDetails(): { [key: number]: number } {
    //     const grams = this.protein / 4;
    //     return new { this.protein: grams };
    // }
}