import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
    question = "What is your name?";
    answer = "unknown";
    appForm = new FormGroup({
      answer: new FormControl(''),
      });
}
