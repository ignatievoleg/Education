function outer() {
    let t = 0;

    return () => ++t;
}

const res = outer();

console.log(res(), res())

//---------------------------
function test(a, b, c, d) {
    console.log('call');
    return a + b;
}

function cache(func) {
    const acc = {};

    function wrapper(...args) {
        const argsFingerprint = args.join(',');

        if (acc[argsFingerprint]) {
            return acc[argsFingerprint] + '-cached';
        }

        acc[argsFingerprint] = func(...args);

        return acc[argsFingerprint];
    }

    return wrapper;
}

const cachedTest = cache(test);

console.log(cachedTest(1, 2));
console.log(cachedTest(4, 2));
console.log(cachedTest(2, 1));
console.log(cachedTest(2, 1));
console.log(cachedTest(4, 1));
console.log(cachedTest(4, 1));
console.log(cachedTest(4, 1));
