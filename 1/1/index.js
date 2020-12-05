let input = require('fs').readFileSync('./input', 'utf8');

input = input.split('\n');

input = input.map(i => Number(i));

for (let item of input) {
    console.log(`Running for base pair ${item}...`);
    let i1;
    let i2;
    for (let item2 of input) {
        console.log(`Child pair ${item2} being ran... (parent: ${item})`);
        console.log(`sum: ${item + item2}`)
        if (item + item2 === 2020) {
            i1 = item;
            i2 = item2;
            console.log(`Found a match! ${item} + ${item2}`);
            break;
        } else {
            console.log('Moving on...');
        }
    }

    if (i1 && i2) {
        console.log('Match found!');
        console.log(`${i1} * ${i2} = ${i1 * i2}`);

        break;
    }
}