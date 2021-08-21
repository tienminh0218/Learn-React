export function getRandomNumber(num: number, lastNum: number): number {
    let newNumber = Math.trunc(Math.random() * (num + 1));

    while (newNumber === lastNum) {
        newNumber = Math.trunc(Math.random() * (num + 1));
    }

    return newNumber;
}
