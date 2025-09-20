import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set-func',
  imports: [],
  templateUrl: './get-set-func.component.html',
  styleUrl: './get-set-func.component.css'
})
export class GetSetFuncComponent {
  name="";
  displayName="";
  email=""
  getName(event:Event){
    const val=(event.target as HTMLInputElement).value;
    this.name=val;
  }
  showName(){
    this.displayName=this.name;
  }

  setName(){
    this.displayName='Aman';
    this.name=this.displayName;
  }

  getEmail(value:string){
    this.email=value;
  }
  setEmail(){
    this.email="default@gmail.com";
  }
}
