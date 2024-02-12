import { Injectable } from '@angular/core';
import { ToastButton, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private toastController:ToastController
  ) { }
  errorHandler(err:any){
    this.presentToast(err);
  }
  async presentToast(err:any){
    const toast=await this.toastController.create({
      message:err.console.error,
      duration:2000
    });
    toast.present();
  }
}
