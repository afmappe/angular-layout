export interface IDictionary<TValue> {
    Add(key: string, value: TValue);
    ContainsKey(key: string): boolean;
    Count(): number;
    Item(key: string): TValue;
    Keys(): string[];
    Remove(key: string): TValue;
    Values(): TValue[];
}

export class Dictionary<TValue> implements IDictionary<TValue> {

    private items: { [index: string]: TValue } = {};

    private count: number = 0;

    public Add(key: string, value: TValue) {
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

    public Remove(key: string): TValue {
        let val = null;

        if (this.items.hasOwnProperty(key)) {
            val = this.items[key];
            delete this.items[key];
            this.count--;
        }

        return val;
    }

    public Item(key: string): TValue {
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

    public Values(): TValue[] {
        let result: TValue[] = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                result.push(this.items[prop]);
            }
        }
        return result;
    }
}