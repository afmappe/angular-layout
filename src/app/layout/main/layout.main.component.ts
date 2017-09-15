import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Topics, LayoutMainService } from "./layout.main.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.main.component.html',
  styleUrls: ['./layout.main.component.scss']
})
export class LayoutMainComponent implements OnDestroy, OnInit {

  title: string;
  title2: string;
  subscription: Subscription;
  subscription2: Subscription;

  constructor(private messageService: LayoutMainService) { }

  ngOnInit(): void {

    this.title = '';
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage(Topics.subject1).subscribe(message => { this.title = message.text; });
    this.subscription2 = this.messageService.getMessage(Topics.subject2).subscribe(message => { this.title2 = message.text; });

  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
