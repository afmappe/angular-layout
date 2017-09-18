import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

export interface IKeyedCollection<T> {
    Add(key: string, value: T);
    ContainsKey(key: string): boolean;
    Count(): number;
    Item(key: string): T;
    Keys(): string[];
    Remove(key: string): T;
    Values(): T[];
}

export class KeyedCollection<T> implements IKeyedCollection<T> {

    private items: { [index: string]: T } = {};

    private count: number = 0;

    public Add(key: string, value: T) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
        }

        this.items[key] = value;
    }

    public ContainsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }

    public Count(): number {
        return this.count;
    }

    public Remove(key: string): T {
        let val = null;

        if (this.items.hasOwnProperty(key)) {
            val = this.items[key];
            delete this.items[key];
            this.count--;
        }

        return val;
    }

    public Item(key: string): T {
        return this.items[key];
    }

    public Keys(): string[] {
        let result: string[] = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                result.push(prop);
            }
        }
        return result;
    }

    public Values(): T[] {
        let result: T[] = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                result.push(this.items[prop]);
            }
        }
        return result;
    }
}

export class Dictionary<T> extends KeyedCollection<T>{ }

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