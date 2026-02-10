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
}
