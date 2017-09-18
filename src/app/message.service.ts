import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Dictionary } from "./dictionary";

@Injectable()
export class MessageService {

    private subjects = new Dictionary<Subject<any>>();

    test(): void {
        debugger
        let test = new Dictionary<number>();
        test.Add("1", 1);
        test.Add("2", 2);
        test.Add("3", 3);
        test.Add("4", 4);

        let b = test.ContainsKey("1");
        b = test.ContainsKey("4");

        let n = test.Count();
        let i = test.Item("3");
        let k = test.Keys();
        i = test.Remove("1");
        i = test.Remove("4");

        b = n > test.Count();
        k = test.Keys();
    }

    clearMessage(key: string) {
        if (typeof key == 'undefined') {
            let items = this.subjects.Values();
            items.forEach(element => {
                element.next();
            });
        }

        else {
            let subject = this.subjects.Item(key);
            if (typeof subject != 'undefined' && subject) {
                subject.next();
            }
        }
    }

    getMessage(key: string): Observable<any> {

        let result;

        if (!this.subjects.ContainsKey(key)) {
            this.subjects.Add(key, new Subject<any>());
        }

        let subject = this.subjects.Item(key);

        if (typeof subject != 'undefined' && subject) {
            result = subject.asObservable();
        }

        return result;
    }

    sendMessage(key: string, message: string): void {
        let subject = this.subjects.Item(key);

        if (typeof subject != 'undefined' && subject) {
            subject.next({ data: message });
        }
    }
}