import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {
  values:number=0;
  operationEvent(operation:string){
    if(operation=='minus' && this.values>0) this.values-=1;
    else if(operation=='plus') this.values+=1;
    else this.values=0;

  }
}
