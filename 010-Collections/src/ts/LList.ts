import {Ilist} from "./types";

class Node {
    private value:number;
    private next:Node;

    constructor(value, next?) {
        this.value = value;
        this.next = next;
    }
}

export class LList implements Ilist{
    private root:Node | null;
    constructor() {

        
    }

    add(item): void {
        this.root = new Node(item,null);
    }

    clear(): void {
    }

    contains(item): boolean {
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

    maxValue(): number {
        return 0;
    }

    minIndex(): number {
        return 0;
    }

    minValue(): number {
        return 0;
    }

    print(): void {
    }

    remove(item): void {
    }

    removeAll(items: number[]): void {
    }

    retainAll(items: number[]): void {
    }

    reverse(): void {
    }

    set(item, index): void {
    }

    sort(): void {
    }

    toArray(): number[] {
        return [];
    }

}