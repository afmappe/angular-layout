import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LayoutMainService {
    private subject = new Subject<any>();

    sendMessage(message: string) {
        debugger
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        debugger
        return this.subject.asObservable();
    }
}