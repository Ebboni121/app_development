import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  username="Customer"

  itemname= "Medals"

  setStatus:string = "Yes"
  

  getStockStatus(){
    return this.setStatus
  }
  isSoldOut = false

  // set button to be disabled in 5sec
  constructor(){
    setTimeout(()=>{
      this.isSoldOut = true
    },5000)
  }


  //Event binding
  onSave(){
    alert('Info Saved')
  }
 /*example of product added to cart msg
  productmsg:string =""
  addProduct(){
    this.productmsg = "Product was added"
  }*/

  quantity: number = 1; 
  price = 99
  total_in_stock = 40;
  total_added = 0;
  total_cost = 0;
  productmsg: string = ''
  outStock: string = ''
  stock = false;

  // Method to add product to cart
  addProduct() {
    if (this.quantity > this.total_in_stock) {
      
      this.outStock = "Sorry, we're out of stock for the selected quantity.";
      this.productmsg = ''; 
      this.stock = true; 
    } else {
     
      const cost = this.quantity * this.price; 
      this.total_added += this.quantity;
      this.total_in_stock -= this.quantity;
      this.total_cost += cost; 
      this.quantity = 1; 
      this.outStock = ''; 
      this.productmsg = 'Product added to cart successfully!'; 
      this.stock = false; 
  }

  }
}
