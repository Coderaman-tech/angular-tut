import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  userName: string | null = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    //use data with router link
    // this.userName=this.route.snapshot.paramMap.get('name');

    //use data with button click
    // this.route.queryParams.subscribe((params) => {
    //   this.userName = params['name'];
    // });

    //use data with router
    this.route.data.subscribe(data=>{
      this.userName=data['name'];
    })
  }
}
