import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-group',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactive-forms-group.component.html',
  styleUrl: './reactive-forms-group.component.css'
})
export class ReactiveFormsGroupComponent {

  profileForm= new FormGroup({
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  })

  onSubmit(){
    console.log(this.profileForm.value);
  }

  // setValue(){
  //   this.profileForm.setValue({
  //     name:'peter',
  //     password:'321',
  //     email:'test123@gmail.com'
  //   })
  // }

//Getter method
  get name(){
    return this.profileForm.get('name');
  }
   get email(){
    return this.profileForm.get('email');
  }
   get password(){
    return this.profileForm.get('password');
  }
}
