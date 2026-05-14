const fibs = (n) => {
    const fibonacciSequence = [];

    let n1 = 0;
    let n2 = 1;

    for (let i = 1; i <= n; i++) {
        fibonacciSequence.push(n1);
        let nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }

    return fibonacciSequence;
}

const fibsRec = (n) => {
    const fibonacciSequence = [];

    let n1 = 0;
    let n2 = 1;
    let nextNum = n1 + n2;

    fibonacciSequence.push(n1);

    if (nextNum <= n) {
        fibonacciSequence.push(n1);
        n1 = n2;
        n2 = nextNum;
        nextNum = n1 + n2;
        console.log(n1)
        return fibsRec(nextNum - 1);    
    }

    return fibonacciSequence;
}

const fibonacci = (n) => {
    const fibonacciSequence = [];

    if (n < 2) {
        fibonacciSequence.push(n);
        return fibonacciSequence;
    }

    for (let i = 0; i < n; i++) {
        let n1 = 0;
        let n2 = 1;
        let nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
        
        fibonacciSequence.push(nextNum);
        fibonacci(i);
    }
    return fibonacciSequence;
}

console.log(fibs(8));
// console.log(fibsRec(8));
console.log(fibonacci(8));