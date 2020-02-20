import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ProjectCalculatorService} from './project-calculator.service';
import {finished} from 'stream';

@Component({
  selector: 'app-project-calculator',
  templateUrl: './project-calculator.component.html',
  styleUrls: ['./project-calculator.component.scss']
})
export class ProjectCalculatorComponent implements OnInit {

  projectCalculatorForm: FormGroup;
  formValue: any;
  result: number;

  constructor(private  fb: FormBuilder, private projectCalculatorService: ProjectCalculatorService) {
    this.projectCalculatorForm = this.fb.group({
        property: ['Studio', [Validators.required]],
        project:  ['Basic', [Validators.required]],
        bedrooms: ['0', [Validators.required, Validators.min(1)]],
        bathrooms: ['0', [Validators.required, Validators.min(1)]],
        area: ['0', [Validators.required, Validators.min(1)]],
        expenses: ['', !Validators],
    });
  }

  ngOnInit(): void {
    this.formValue = this.projectCalculatorForm.value;
  }

  calculate() {
    this.result = this.projectCalculatorService.calculate(this.formValue);
    return this.result;
  }
}
