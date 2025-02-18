import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioLayoutComponent } from './portfolio/portfolio-layout/portfolio-layout.component';
import { HomeComponent } from './portfolio/home/home.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ServiceComponent } from './portfolio/service/service.component';
import { SkillComponent } from './portfolio/skill/skill.component';

const routes: Routes = [

  {
    path:"",redirectTo:"/portfolio/home",pathMatch:"full"
  },
  {
    path:"portfolio",component:PortfolioLayoutComponent,
    children:[
      {
        path:"home",component:HomeComponent
      },
      {
        path:"about",component:AboutComponent
      },
      {
        path:"contact",component:ContactComponent
      },
      {
        path:'service',component:ServiceComponent
      },
      {
        path:'skill',component:SkillComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
