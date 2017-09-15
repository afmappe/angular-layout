import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LayoutMainService } from "./layout.main.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.main.component.html',
  styleUrls: ['./layout.main.component.scss']
})
export class LayoutMainComponent implements OnDestroy, OnInit {

  title: string;
  subscription: Subscription;

  constructor(private messageService: LayoutMainService) { }

  ngOnInit(): void {

    this.title = '';
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => { this.title = message.text; });
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
