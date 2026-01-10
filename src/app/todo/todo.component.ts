import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todo=""
  todoList:{id:number,task:string}[]=[]

  addTask(){
    this.todoList.push({id:this.todoList.length+1,task:this.todo});
    this.todo='';
  }
  deleteTask(id:number){
    this.todoList=this.todoList.filter((item)=>item.id!=id);
  }

}
