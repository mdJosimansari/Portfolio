import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioLayoutComponent } from './portfolio/portfolio-layout/portfolio-layout.component';
import { PortfolioHeaderComponent } from './portfolio/portfolio-layout/portfolio-header/portfolio-header.component';
import { PortfolioFooterComponent } from './portfolio/portfolio-layout/portfolio-footer/portfolio-footer.component';
import { HomeComponent } from './portfolio/home/home.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ServiceComponent } from './portfolio/service/service.component';
import { SkillComponent } from './portfolio/skill/skill.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioLayoutComponent,
    PortfolioHeaderComponent,
    PortfolioFooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
