import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutMainComponent } from "../layout/main/layout.main.component";

export const routes: Routes = [
    { path: '', component: LayoutMainComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Module1RoutingModule { }