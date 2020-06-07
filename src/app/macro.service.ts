import { Injectable } from '@angular/core';
import { Macros } from './macros.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MacroService {
  macrosChanged = new Subject<Macros>();
  bmr = 0;
  tdee = 0;
  macros: Macros;

  constructor() { }

  calculateMacros() {
    const protein = Math.round(this.tdee * 0.4);
    const carbs = Math.round(this.tdee * 0.3);
    const fats = Math.round(this.tdee * 0.3);

    this.macros = new Macros(protein, carbs, fats);

    this.macrosChanged.next(this.macros);
  }

  setTdee(activity: number) {
    this.tdee = this.bmr * activity;

    this.calculateMacros();
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

      const weightCalc = weightNum * weight;
      const heightCalc = heightNum * height;
      const ageCalc = ageNum * age;

      const additions = overall + weightCalc + heightCalc;

      this.bmr = Math.round(additions - ageCalc);
  }


}
