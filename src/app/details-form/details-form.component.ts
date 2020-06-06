import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MacroService } from '../macro.service';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  genders = [ 'Male', 'Female' ];
  gender = 'Male';
  activity = 1.2;

  constructor(private macroService: MacroService) { }

  ngOnInit(): void {
  }

  onSubmit(detailForm: NgForm) {
    this.macroService.calculateBmr(
      detailForm.value.gender,
      detailForm.value.weight,
      detailForm.value.height,
      detailForm.value.age
    );
  }

}
