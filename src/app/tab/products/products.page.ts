import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { ProductModel } from './model/productmodel';
import { ErrorService } from '../error.service';
import { ToastButton, ToastController } from '@ionic/angular';

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
    private errorService:ErrorService,
    private toastController:ToastController
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
addQuantity(product:ProductModel){
const quantity=document.getElementById('name-' + product.id).innerHTML;
 if(+quantity+1>product.inventoryQuantity)
 {
this.presentToast('Adet Stok Adedinden Fazla Olamaz');
return;
 }
 document.getElementById('name-'+product.id).innerHTML=(+quantity+1).toString();
}
outQuantity(product:ProductModel){
const quantity=document.getElementById('name-' + product.id).innerHTML;
if(+quantity-1<1){
this.presentToast('adet 1 den küçük olamaz');
return;
}
document.getElementById('name-'+product.id).innerHTML=(+quantity-1).toString();
}
async presentToast(_message:string){
  const toast=await this.toastController.create({
    message:_message,
    duration:2000
  });
  toast.present();
}
}