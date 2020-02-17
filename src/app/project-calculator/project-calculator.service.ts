import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectCalculatorService {
  result: number;
  calculatedArea: number;
  formData: any;

  constructor() { }

  calculate(formData) {
     const  House = 1.1;
     const  Office = 1.2;
     const  RetailProperty = 3;

     switch (formData.property) {
      case 'Apartment': this.result = this.CalculatePropertyArea(formData) *
        (formData.bathrooms + this.formData.bedrooms);
                        break;
       case 'Studio': this.result = this.CalculatePropertyArea(formData);
                      break;
       case 'Office': this.result = this.CalculatePropertyArea(formData) *
         (formData.bathrooms + this.formData.bedrooms) * Office;
                      break;
       case 'House': this.result = this.CalculatePropertyArea(formData) *
         (formData.bathrooms + this.formData.bedrooms) * House;
                     break;
       case 'RetailProperty': this.result = this.CalculatePropertyArea(formData) *
         (formData.bathrooms + this.formData.bedrooms) * RetailProperty;
                              break;
    }

     return this.result;
  }

  CalculatePropertyArea(formData) {
     const  BaseProjectRate = 4.88;
     const  FullProjectRate = 8.34;
     const  ConsultationRate = 3.15;

     switch (formData.project) {
      case 'Basic': this.calculatedArea = BaseProjectRate * formData.area;
                    break;
      case 'Full': this.calculatedArea = FullProjectRate * formData.area;
                   break;
      case 'Consultation': this.calculatedArea = ConsultationRate * formData.area;
                           break;
    }

     return this.calculatedArea;
  }
}
