import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: 'module1', pathMatch: 'full' },
    { path: 'module1', loadChildren: '../app/module1/module1.module#Module1Module' },
    { path: 'module2', loadChildren: '../app/module2/module2.module#Module2Module' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }