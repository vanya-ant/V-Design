import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-project-calculator',
  templateUrl: './project-calculator.component.html',
  styleUrls: ['./project-calculator.component.scss']
})
export class ProjectCalculatorComponent implements OnInit {

  projectCalculatorForm: FormGroup;

  constructor(private  fb: FormBuilder) {
    this.projectCalculatorForm = this.fb.group({
        property: ['Studio', [Validators.required]],
        project:  ['Basic', [Validators.required]],
        bedrooms: ['0', [Validators.required]],
        bathrooms: ['0', [Validators.required]],
        area: ['0', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  calculate() {}


}
