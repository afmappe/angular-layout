import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutMainComponent } from './layout/main/layout.main.component';
import { TwocolumnsComponent } from './layout/twocolumns/twocolumns.component';

import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";
import { ThreecolumnsComponent } from './layout/threecolumns/threecolumns.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent,
    TwocolumnsComponent,
    DetailComponent,
    ListComponent,
    ThreecolumnsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
