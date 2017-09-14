import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy } from '@angular/core';
import { MessageService } from "./message.service";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `<router-outlet></router-outlet>`
})

export class AppComponent { }
// export class AppComponent implements OnDestroy {
//   message: any;
//   subscription: Subscription;

//   constructor(private messageService: MessageService) {

//     // subscribe to home component messages
//     this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
//   }

//   ngOnDestroy() {
//     // unsubscribe to ensure no memory leaks
//     this.subscription.unsubscribe();
//   }
