import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}
   //pass data with router link

  // goToProfile(){
  //   this.router.navigate(['profile',{name:'Aman'}]);
  // }
  // pass data with button click
//   goToProfile(name:string){
//   this.router.navigate(['profile'],{queryParams:{name:name}});
// }

users=[
  {
    id:'1',
    name:'aman',
    age:24,
    email:'aman@example.com'
  },
  {
    id:'2',
    name:'john',
    age:30,
    email:'john@example.com'
  },
  {
    id:'3',
    name:'alice',
    age:28,
    email:'alice@example.com'
  }
]
}

