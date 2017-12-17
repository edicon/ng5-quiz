import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { QuizService } from './quiz.service';
import { TechnologyService } from './technology.service';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TechnologySearchComponent } from './technology-search/technology-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    NavBarComponent,
    SideNavComponent,
    FooterComponent,
    TechnologiesComponent,
    TechnologyDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TechnologySearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(
                                   InMemoryDataService, { dataEncapsulation: false})
  ],
  providers: [QuizService, TechnologyService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
