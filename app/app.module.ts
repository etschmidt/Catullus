import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CarmenDetailComponent } from './carmen-detail.component';
import { CatullusComponent } from './catullus.component';
import { AboutComponent } from './about.component';

import { SearchPipe } from './search.pipe';
import { CarmenService } from './carmen.service';
import { routing } from './app.routing';

@NgModule({
  imports: [ 
  	BrowserModule, 
  	FormsModule,
    routing
  ],
  declarations: [ 
	  AppComponent, 
	  CarmenDetailComponent,
    CatullusComponent,
    AboutComponent,
    SearchPipe
  ],
  providers: [
  	CarmenService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
