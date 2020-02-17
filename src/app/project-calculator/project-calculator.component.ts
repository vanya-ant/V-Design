import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {ProjectCalculatorService} from './project-calculator.service';

@Component({
  selector: 'app-project-calculator',
  templateUrl: './project-calculator.component.html',
  styleUrls: ['./project-calculator.component.scss']
})
export class ProjectCalculatorComponent implements OnInit {

  projectCalculatorForm: FormGroup;
  formData: any;
  result: number;

  constructor(private  fb: FormBuilder, private projectCalculatorService: ProjectCalculatorService) {
    this.projectCalculatorForm = this.fb.group({
        property: ['Studio', [Validators.required]],
        project:  ['Basic', [Validators.required]],
        bedrooms: ['0', [Validators.required, Validators.min(1)]],
        bathrooms: ['0', [Validators.required, Validators.min(1)]],
        area: ['0', [Validators.required, Validators.min(1)]],
        expenses: ['Expenses', !Validators],
    });
  }

  ngOnInit(): void {
  }

  calculate() {
    this.result = this.projectCalculatorService.calculate(this.formData);
    // tslint:disable-next-line:no-unused-expression
    this.projectCalculatorForm.controls.expenses.enabled;
    this.projectCalculatorForm.controls.expenses.patchValue(Math.round(this.result), {emitEvent: false});
  }
}
