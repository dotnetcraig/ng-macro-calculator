import { Component, OnInit } from '@angular/core';
import { MacroService } from '../macro.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  showResults = false;

  constructor(
    private macroService: MacroService
  ) { }

  ngOnInit(): void {
    // TODO: subscribe to an emittion of calculation.
  }

}
