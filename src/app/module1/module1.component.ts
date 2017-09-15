import { Component, OnInit } from "@angular/core";

import { LayoutMainService } from "../layout/main/layout.main.service";

@Component({
    selector: 'module1-root',
    template: `<router-outlet></router-outlet>`
})

export class Module1Component implements OnInit {
    constructor(private messageService: LayoutMainService) { }

    ngOnInit(): void {
        debugger
        this.messageService.sendMessage("Hello from Module1");
    }
}