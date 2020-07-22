import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
     private alertController:AlertController,
     private router:Router,
     private actionSheetController:ActionSheetController,
     private data: DataService
    
    ) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  openActionSheet(){
    this.presentActionSheet();
  }

  exit(){
    this.router.navigate(['signin']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
        text:'OK',
        handler:() => {
        console.log("Mustafa Berk");
        },
        },
        {
          text:'Cancel',
          handler:() => {
          console.log("CANCEL !!");
          },
          }
        ]
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Gallery',
        role: 'destructive',
        icon: 'image',
        handler: () => {
          this.router.navigate(['gallery']);
        }
      }, {
        text: 'Side Menu',
        icon: 'menu',
        handler: () => {
            this.router.navigate(['sidemenu']);
        }
      }, {
        text: 'Ion Alert',
        icon: 'alert',
        handler: () => {
          this.presentAlert();
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
