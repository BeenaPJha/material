import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageapiService {
  constructor(private http: HttpClient) {}
  getImage() {
    return this.http.get('https://picsum.photos/v2/list');
  }
}
