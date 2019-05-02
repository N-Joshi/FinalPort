import { Component, OnInit , HostListener } from '@angular/core';
import {Router} from '@angular/router'

	@Component({
	  selector: 'app-landingpage',
	  templateUrl:'./landingpage.component.html',
	  styleUrls: ['./landingpage.component.css']
	})


	export class LandingpageComponent implements OnInit {

	  constructor() { }

	  ngOnInit() {}
	  

		   @HostListener('document:mousemove', ['$event']) 
			  onMouseMove(e) {
				var x= e.clientX * 100 / window.innerWidth + "%";
				var y= e.clientY * 100 / window.innerHeight + "%";	
				  let tabElements = document.getElementsByClassName("ball") as HTMLCollectionOf<HTMLElement>;
				  
				  for(var i=0;i<2;i++){
				  tabElements[i].style.left=x;
				  tabElements[i].style.top=y;
				  tabElements[i].style.transform = "translate(-"+x+",-"+y+")" ;
				 }
			  }

	}
