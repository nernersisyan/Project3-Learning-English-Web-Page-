import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule} from './app-routing.mdoule';
import {LessonsComponent} from './lessons/lessons.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestsComponent } from './tests/tests.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LessonsComponent,
    TestsComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
