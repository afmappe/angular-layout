import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from "./module2-routing.module";

import { DetailComponent } from "./detail/detail.component";
import { LayoutMainComponent } from "../layout/main/layout.main.component";
import { ListComponent } from "./list/list.component";
import { ThreecolumnsComponent } from "../layout/threecolumns/threecolumns.component";
import { TwocolumnsComponent } from "../layout/twocolumns/twocolumns.component";

@NgModule({
  declarations: [
    DetailComponent
    , LayoutMainComponent
    , ListComponent
    , ThreecolumnsComponent
    , TwocolumnsComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
