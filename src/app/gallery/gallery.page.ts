import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery/gallery.service';
import { Photo } from '../modal/Photo';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  
  
  items:Array<Photo> = [];
  constructor(private galleryService:GalleryService,private loadingController:LoadingController) { 
  this.presentLoading();
    this.galleryService.getList().subscribe(d=> {
    this.items=d;
   loadingController.dismiss(true);
  });

  }

  delete(item)
  {
    if(confirm( item.title + " silmek isteğinizden emin misiniz ?"))
    {
      let index = this.items.indexOf(item);
      if(index > -1){
        this.items.splice(index, 1);
      }
    }
  }


   
 async presentLoading(){
const   loading  = this.loadingController.create({
cssClass:'loading',
message:'Veriler yükleniyor lütfen bekleyin...'
});

(await loading).present();
  }

  ngOnInit() {
  }

}
