import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChoiceService } from './choices/choice.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import {RouterModule} from '@angular/router';
// import {routes} from './app-routing.module';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChoicesListComponent } from './choices/choices-list/choices-list.component';
import { ChoiceComponent } from './choices/choice/choice.component';
import { ChoiceContainerComponent } from './container/choice-container/choice-container.component';
import { Database } from './database';

@NgModule({
  declarations: [
    AppComponent,
    ChoicesListComponent,
    ChoiceComponent,
    ChoiceContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, {
     delay: 0
   }),
  ],
  providers: [ChoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
