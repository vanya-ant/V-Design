import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectCalculatorService {
  result: number;
  calculatedArea: number;

  constructor() { }

  calculate(formData) {
    const  House = 1.1;
    const  Office = 1.2;
    const  RetailProperty = 3;

    switch (formData.property) {
      case 'Apartment': this.result = this.calculatePropertyArea(formData) *
        (formData.bathrooms + formData.bedrooms);
                        break;
      case 'Studio': this.result = this.calculatePropertyArea(formData);
                     break;
      case 'Office': this.result = this.calculatePropertyArea(formData) *
        (formData.bathrooms + formData.bedrooms) * Office;
                     break;
      case 'House': this.result = this.calculatePropertyArea(formData) *
        (formData.bathrooms + formData.bedrooms) * House;
                    break;
      case 'Commercial property': this.result = this.calculatePropertyArea(formData) *
        (formData.bathrooms + formData.bedrooms) * RetailProperty;
                                  break;
    }

    return this.result;
  }

  calculatePropertyArea(formData) {
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
