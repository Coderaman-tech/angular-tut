import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterPipe } from './currency-converter.pipe';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule, CurrencyConverterPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  title = 'Angular Pipe';
  date=new Date();
  amount=100;
  convert_amount=10;
}
