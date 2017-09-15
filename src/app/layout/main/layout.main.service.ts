import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

export const enum Topics {
    subject1 = 0,
    subject2 = 1
}

@Injectable()
export class LayoutMainService {
    private subject1 = new Subject<any>();
    private subject2 = new Subject<any>();

    sendMessage(topic: Topics, message: string) {
        switch (topic) {
            case Topics.subject1:
                this.subject1.next({ text: message + 'From: Subject 1' })
                break;
            case Topics.subject2:
                this.subject2.next({ text: message + 'From: Subject 2' })
                break;
        }
    }

    clearMessage(topic: Topics) {
        switch (topic) {
            case Topics.subject1: this.subject1.next(); break;
            case Topics.subject2: this.subject2.next(); break;
        }
    }

    getMessage(topic: Topics): Observable<any> {
        let result;
        switch (topic) {
            case Topics.subject1: result = this.subject1.asObservable(); break;
            case Topics.subject2: result = this.subject2.asObservable(); break;
        }
        return result;
    }
}