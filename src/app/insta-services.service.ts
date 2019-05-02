import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class InstaServicesService {


  constructor(private Http: HttpClient) {}
 
    getInstaDetails() {
      return this.Http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=2158508652.8a778a5.89e32da36da54cbb9410d5d1cb387ec9', {
            headers: new HttpHeaders()
                .set('Accept', 'aplication/json')
        })
    }
 
	
}
