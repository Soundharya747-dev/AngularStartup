import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent, splice } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent, Search } from '../first/first.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  imports:  [
    BrowserAnimationsModule, 
       HttpClientModule,   
     BrowserModule, 
     FormsModule
    ],
  declarations: [ AppComponent,splice,FirstComponent,Search, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
