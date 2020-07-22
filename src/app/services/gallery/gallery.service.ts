import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Photo } from 'src/app/modal/Photo';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  getList(): Observable<Array<Photo>> {
    return this.http.get<Array<Photo>>(`${environment.galleryRootApi}photos`);
  }

}
