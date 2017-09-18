import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMainComponent } from "../layout/main/layout.main.component";
import { Module1Component } from "./module1.component";
import { Module1RoutingModule } from "./module1-routing.module";

import { MessageService } from "../message.service";

@NgModule({
  declarations: [
    LayoutMainComponent,
    Module1Component],
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  providers: [MessageService]

})
export class Module1Module { }
