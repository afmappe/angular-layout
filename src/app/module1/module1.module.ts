import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMainComponent } from "../layout/main/layout.main.component";
import { Module1Component } from "./module1.component";
import { Module1RoutingModule } from "./module1-routing.module";

@NgModule({
  declarations: [
    LayoutMainComponent,
    Module1Component],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]

})
export class Module1Module { }
