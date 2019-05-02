import { Component, OnInit } from '@angular/core';
import { InstaServicesService } from '../insta-services.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  constructor(private userService: InstaServicesService, private router: Router) { }

  allDetails: any;

  ngOnInit()  {
     this.getApiData()}

    getApiData() {
      this.userService.getInstaDetails
      ().subscribe( (res : any) => {
        this.allDetails = res;
        console.log(JSON.stringify(res.data));
      })
  }

}
