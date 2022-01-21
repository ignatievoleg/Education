import {Ilist} from "./types";

export class AList<T> implements Ilist<T> {
    private array: T[];

    private size: number;

    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(item): void {
        this.array[this.size] = item;
        this.size++
    }

    clear(): void {
        this.array = [];
        this.size = 0;
    }

    contains(item): boolean {
        for (const itemElem of this.array) {
            if (itemElem === item) {
                return true;
            }
        }
        return false;
    }

    get(index): void {
    }

    getSize(): number {
        return 0;
    }

    halfReverse(): void {
    }

    maxIndex(): number {
        return 0;
    }

    maxValue(): T {
        return 0;
    }

    minIndex(): number {
        return 0;
    }

    minValue(): T {
        return 0;
    }

    print(): void {
    }

    remove(item): void {
    }

    removeAll(items: T[]): void {
    }

    retainAll(items: T[]): void {
    }

    reverse(): void {
    }

    set(item, index): void {
    }

    sort(): void {
    }

    toArray(): T[] {
        return [];
    }
}

const test = new AList<T>()
const test2 = new AList<string>()
const test3 = new AList()