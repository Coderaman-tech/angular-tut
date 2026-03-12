import { Component } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-parent-customer',
  imports: [CustomerComponent],
  templateUrl: './parent-customer.component.html',
  styleUrl: './parent-customer.component.css'
})
export class ParentCustomerComponent {
  customer:string="Aman";
  city:string="Noida";
  onCustomerChange(user:string){
    this.customer=user;
  }

}
