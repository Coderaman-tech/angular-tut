import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
 count:WritableSignal<number>=signal(0);
 constructor(){
  effect(()=>{
    console.log(this.count());
  })
 }
}
