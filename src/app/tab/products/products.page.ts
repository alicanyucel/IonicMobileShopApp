import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { ProductModel } from './model/productmodel';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
products:ProductModel[]=[]
quantity:number=1;
  constructor(
    private productService:ProductService,
    private errorService:ErrorService
  ) { }

  ngOnInit() {
    this.getlist();
  }
getlist(){
  this.productService.getList().subscribe((res:any)=>{
 this.products=res.data;
  },(err)=>{
   this.errorService.errorHandler(err);
  });
}
addQuantity(){
  this.quantity++;
}
outQuantity(){
  this.quantity--;
}
}
