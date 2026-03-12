import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  @Input() customerName:string="";
  @Input() customerCity:string="";

}
