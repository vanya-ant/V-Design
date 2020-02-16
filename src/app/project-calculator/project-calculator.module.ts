import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCalculatorComponent } from './project-calculator.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProjectCalculatorComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ProjectCalculatorModule { }
