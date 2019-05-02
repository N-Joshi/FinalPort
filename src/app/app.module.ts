import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HobbyComponent } from './hobby/hobby.component';
import { SafePipe } from './safe.pipe';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CertificationsComponent } from './certifications/certifications.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HobbyComponent,
    SafePipe,
    SkillsComponent,
    WorkComponent,
    LandingpageComponent,
    CertificationsComponent,
  
  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
	BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
