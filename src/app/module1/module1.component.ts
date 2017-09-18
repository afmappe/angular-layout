import { Component, OnInit } from "@angular/core";

import { MessageService } from "../message.service";

@Component({
    selector: 'module1-root',
    template: `<router-outlet></router-outlet>`
})

export class Module1Component implements OnInit {
    constructor(private messageService: MessageService) { }

    ngOnInit(): void {
        this.messageService.test();
        this.messageService.sendMessage('test1', "Hello from Module1");
        this.messageService.sendMessage('test2', "Hello from Module2");
    }
}