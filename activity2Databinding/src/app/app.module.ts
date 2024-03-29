import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SubtractComponent } from './subtract/subtract.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SubtractComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
