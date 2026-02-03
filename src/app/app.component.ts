import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
  
@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
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
