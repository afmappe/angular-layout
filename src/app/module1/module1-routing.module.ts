import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutMainComponent } from "../layout/main/layout.main.component";
import { Module1Component } from "./module1.component";

export const routes: Routes = [
    {
        path: '', component: LayoutMainComponent,
        children: [
            {
                path: '', component: Module1Component, outlet: 'main'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Module1RoutingModule { }