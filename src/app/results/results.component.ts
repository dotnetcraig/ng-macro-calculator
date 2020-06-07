import { Component, OnInit, OnDestroy } from '@angular/core';
import { MacroService } from '../macro.service';
import { Macros } from '../macros.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  showResults = false;
  subscription: Subscription;
  macros: Macros;
  bmr: number;
  tdee: number;

  constructor(
    private macroService: MacroService
  ) { }

  ngOnInit(): void {
    this.subscription = this.macroService.macrosChanged.subscribe(macros => {
      this.macros = macros;
      this.bmr = this.macroService.bmr;
      this.tdee = this.macroService.tdee;

      this.showResults = true;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
