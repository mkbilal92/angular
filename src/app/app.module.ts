import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { FormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion'; 
import {ButtonModule} from 'primeng/button';
import { ServicePracticeComponent } from './service-practice/service-practice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    ServicePracticeComponent,
    FormcomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    ButtonModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
