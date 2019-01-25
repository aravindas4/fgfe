import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import {RouterModule} from '@angular/router';
// import {routes} from './app-routing.module';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChoicesListComponent } from './choices/choices-list/choices-list.component';
import { ChoiceComponent } from './choices/choice/choice.component';
import { ChoiceContainerComponent } from './container/choice-container/choice-container.component';
import { ChoiceService } from './choices/choice.service';
import { AuthService } from './auth/auth.service';
import { TokenInterceptor } from './auth/token.interceptor';
// import { ChoiceInterceptor } from './choices/choice.interceptor';
import { ChoiceErrorHandlerComponent } from './choices/choice-error-handler.component';
import { ChoiceErrorHandlerService } from './choices/choice-error-handler.service';
// import { Database } from './database';

@NgModule({
  declarations: [
    AppComponent,
    ChoicesListComponent,
    ChoiceComponent,
    ChoiceContainerComponent,
    ChoiceErrorHandlerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [ChoiceService,
              ChoiceErrorHandlerService,
        {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    // {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: ChoiceInterceptor,
    //     multi: true
    //   }
    ],
  bootstrap: [AppComponent],
  entryComponents: [ChoiceErrorHandlerComponent]
})
export class AppModule { }
