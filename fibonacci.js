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
    
    if (Number.isInteger(n) === false) {
        return console.log('Not a number.');
    }

    if (n === 0) {
        return [0];
    }

    if (n === 2) {
        return [0, 1];
    }

    const sequence = fibsRec(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;

}

const fibsRec2 = (n) => {
    if (n == 1)  {
        return [0];
    }

    if (n == 2) {
        return [0, 1];
    }

    const sequence = fibsRec2(n - 1);
    const sum = sequence.at(-1) + sequence.at(-2);
    return [...sequence, sum];
}

console.log(fibs(8));
console.log(fibsRec(12));
console.log('Fibs Rec 2:');
console.log(fibsRec2(8));