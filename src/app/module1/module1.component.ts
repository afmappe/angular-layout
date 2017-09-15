import { Component, OnInit } from "@angular/core";

import { Topics, LayoutMainService } from "../layout/main/layout.main.service";

@Component({
    selector: 'module1-root',
    template: `<router-outlet></router-outlet>`
})

export class Module1Component implements OnInit {
    constructor(private messageService: LayoutMainService) { }

    ngOnInit(): void {
        this.messageService.sendMessage(Topics.subject1, "Hello from Module1");
        this.messageService.sendMessage(Topics.subject2, "Hello from Module2");
    }
}