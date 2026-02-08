import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  handleClickEvent(){
    console.log("click event called");
    this.anotherEvent();
  }
  anotherEvent(){
    console.log("clicked another event");
  }
  sumTwoVariable(a:number,b:number){
    console.log(a+b);
  }
}
