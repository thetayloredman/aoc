let input = require('fs').readFileSync('./input', 'utf8').split('\n').map(i => Number(i));

for (let item of input) {
    let i1,
        i2;

    for (let item2 of input) {
        if (item + item2 === 2020) {
            i1 = item;
            i2 = item2;
            break;
        }
    }

    if (i1 && i2) {
        console.log(`${i1} * ${i2} = ${i1 * i2}`);

        break;
    }
}
