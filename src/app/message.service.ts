import { Injectable, OnInit } from '@angular/core';
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
        if (!this.items.hasOwnProperty(key))
            this.count++;

        this.items[key] = value;
    }

    public ContainsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }

    public Count(): number {
        return this.count;
    }

    public Remove(key: string): T {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    }

    public Item(key: string): T {
        return this.items[key];
    }

    public Keys(): string[] {
        var keySet: string[] = [];

        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }

        return keySet;
    }

    public Values(): T[] {
        var values: T[] = [];

        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }

        return values;
    }
}

export class Dictionary<T> extends KeyedCollection<T>{ }

@Injectable()
export class MessageService implements OnInit {

    private subjects: Dictionary<Subject<any>>;

    ngOnInit(): void {
        this.subjects = new Dictionary<Subject<any>>();
    }

    clearMessage(key: string) {
        let subject = this.subjects.Item(key);

        if (typeof subject != 'undefined' && subject) {
            subject.next();
        }
    }

    getMessage(key: string): Observable<any> {
        let result;

        let subject = this.subjects.Item(key);

        if (typeof subject != 'undefined' && subject) {
            result = subject.asObservable();
        }

        return result;
    }

    sendMessage(key: string, message: string): void {

        let subject: Subject<any>;

        if (!this.subjects.ContainsKey(key)) {
            this.subjects.Add(key, new Subject<any>());
        }

        subject = this.subjects.Item(key);

        if (typeof subject != 'undefined' && subject) {
            subject.next({ data: message });
        }
    }
}