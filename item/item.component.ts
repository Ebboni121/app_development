import { Component } from '@angular/core';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  username="Ebboni"

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
/* example of product added to cart msg
  productmsg:string =""
  addProduct(){
    this.productmsg = "Product was added"
  }*/

  productmsg:string =""
  total_in_stock = 5
  total_added = 0
  outStock = ""
  stock = false
  addProduct(){
    if(this.total_in_stock >0)
      {
    this.total_added ++
    this.total_in_stock --
  }
  else{
    this.outStock = "Sorry we're out of stock"
    this.stock = true
  }

  }
}
