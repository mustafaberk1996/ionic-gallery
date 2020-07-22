import { Component, OnInit } from '@angular/core';
import { Photo } from '../modal/Photo';
import { ActivatedRoute } from '@angular/router';
import { NavExtrasServiceService } from '../services/nav-extras-service/nav-extras-service.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.page.html',
  styleUrls: ['./gallery-detail.page.scss'],
})
export class GalleryDetailPage implements OnInit {

  item:Photo;
  constructor(private activatedRoute:ActivatedRoute,
    private navExtrasService:NavExtrasServiceService
    ) {

    //this.item = activatedRoute.snapshot.params['item'];
    this.item = navExtrasService.getExtras();
    console.log(this.item);
   }

  ngOnInit() {
  }

}
