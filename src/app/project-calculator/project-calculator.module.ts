import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCalculatorComponent } from './project-calculator.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ProjectCalculatorService} from './project-calculator.service';


@NgModule({
  declarations: [ProjectCalculatorComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [
   ProjectCalculatorService
  ],
})
export class ProjectCalculatorModule { }
