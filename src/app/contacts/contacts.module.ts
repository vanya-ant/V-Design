import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ContactsComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ContactsModule { }
