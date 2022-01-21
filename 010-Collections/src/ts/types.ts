export  interface Ilist<T> {
    clear: () => void
    add: (item) => void
    getSize: () => number
    set: (item,index) => void
    get: (index) => void
    remove: (item) => void
    toArray: () => T[]
    toString: () => string
    contains: (item) => boolean
    minValue: () => T
    maxValue: () => T
    minIndex: () => number
    maxIndex: () => number
    reverse: () => void
    halfReverse: () => void
    retainAll: (items: T[]) => void
    removeAll: (items: T[]) => void
    sort: () => void
    print: () => void

}