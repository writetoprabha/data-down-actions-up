import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { OuterContainerComponent } from './outer-container/outer-container.component';
import { InnerContainerComponent } from './inner-container/inner-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    OuterContainerComponent,
    InnerContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
