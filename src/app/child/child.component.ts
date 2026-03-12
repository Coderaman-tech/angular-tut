import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() getUsers=new EventEmitter();
  users=['Anil','Aman','Ankit','Anshul','Aryan'];
  loadData(){
    this.getUsers.emit(this.users);
  }

}
