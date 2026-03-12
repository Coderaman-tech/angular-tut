import { Component} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-child-parent',
  imports: [ChildComponent],
  templateUrl: './child-parent.component.html',
  styleUrl: './child-parent.component.css'
})
export class ChildParentComponent {

  users:undefined | string[];
  handleUsers(users:string[]){
    this.users=users;
  }

}
