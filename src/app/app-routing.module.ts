import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutMainComponent } from "./layout/main/layout.main.component";
import { TwocolumnsComponent } from "./layout/twocolumns/twocolumns.component";
import { ThreecolumnsComponent } from "./layout/threecolumns/threecolumns.component";
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutMainComponent,
        children: [
            {
                path: 'a', component: TwocolumnsComponent,
                children: [
                    { path: '', component: DetailComponent, outlet: 'right' },
                    { path: '', component: ListComponent, outlet: 'left' }
                ]
            },
            {
                path: 'b', component: ThreecolumnsComponent,
                children: [
                    { path: '', component: DetailComponent, outlet: 'right' },
                    { path: '', component: DetailComponent, outlet: 'center' },
                    { path: '', component: ListComponent, outlet: 'left' }
                ]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }