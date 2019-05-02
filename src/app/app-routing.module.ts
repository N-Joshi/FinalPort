import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { CertificationsComponent} from './certifications/certifications.component';



const routes: Routes = [
 {
    path:'about',
    component: AboutMeComponent
  },
  {
    path:'home',
    component: AppComponent
  },
  {
    path:'hob',
    component: HobbyComponent
  },
  {
    path:'skills',
    component: SkillsComponent
  },
  {
    path:'work',
    component: WorkComponent
  },
	{
	path:'certifications',
    component: CertificationsComponent
	},
  {
    path:'**',
    component:LandingpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

