import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
    @Input() name: any;
    quantity: any;
    products: any;
    selectedProduct: any;

    constructor() {}

    ngOnInit() {
      this.name = "";
      this.quantity = 0;
      this.products = ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"];
      this.selectedProduct = "";
    }

    onSubmit() {
      console.log("Quantity: "+this.quantity+", Selected film: "+this.selectedProduct);
    }

    newInfo() {
      this.quantity = 0;
      this.selectedProduct = "";
    }
}
