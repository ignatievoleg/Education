/*function outer() {
    let t = 0;

    return () => ++t;
}

const res = outer();

console.log(res(), res(), res()) */ //пример замыкания

//---------------------------
function test(a, b, c, d) {

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

module.exports = {cachedTest}

