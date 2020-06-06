import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'macro-calculator';
  
  age = 0; // years
  height = 0; // cm
  weight = 0; // kg
  activity = 1.2;

  

  // onSubmit() {
  //   this.bmr = this.calculateBmr();
  //   this.tdee = this.bmr * this.activity;
    
  //   this.calculateMacroCalories();
  //   this.calculateMacros();
  // }

  
}