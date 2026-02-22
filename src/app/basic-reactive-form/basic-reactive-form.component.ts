import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './basic-reactive-form.component.html',
  styleUrl: './basic-reactive-form.component.css'
})
export class BasicReactiveFormComponent {
  name = new FormControl('Aman');
  password = new FormControl('test@123');
  
  displayValue(){
    console.log(this.name.value,this.password.value);
    
  }

  setValues(){
    this.name.setValue('peter');
    this.password.setValue('321');
  }
}
