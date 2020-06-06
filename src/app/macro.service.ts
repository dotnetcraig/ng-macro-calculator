import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MacroService {
  bmr = 0;
  tdee = 0;
  protein = 0;
  proteinGrams = 0;
  carbs = 0;
  carbGrams = 0;
  fats = 0;
  fatGrams = 0;

  constructor() { }

  calculateMacroCalories() {
    this.protein = this.tdee * 0.4;
    this.carbs = this.tdee * 0.3;
    this.fats = this.tdee * 0.3;
  }

  calculateMacros() {
    this.proteinGrams = Math.round(this.protein / 4);
    this.carbGrams = Math.round(this.carbs / 4);
    this.fatGrams = Math.round(this.fats / 9);
  }

  calculateBmr(
    gender: string, 
    weight: number, 
    height: number,
    age: number) 
    {
    const isMale = gender === 'Male' ? true: false;
    const overall = isMale ? 88.362 : 447.593;
    const weightNum = isMale ? 13.397 : 9.247;
    const heightNum = isMale ? 4.799 : 3.098;
    const ageNum = isMale ? 5.677 : 4.330;


    return overall + (weightNum * weight) 
                  + (heightNum * height) 
                  - (ageNum * age);
  }
}
