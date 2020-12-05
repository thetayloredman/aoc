let input = require('fs').readFileSync('./input', 'utf8');

input = input.split('\n');

input = input.map(i => Number(i));

for (let item of input) {
    console.log(`Running for base pair ${item}...`);
    let i1;
    let i2;
    let i3;
    for (let item2 of input) {
        console.log(`Child pair ${item2} being ran... (parent: ${item})`);
        /*if (item + item2 === 2020) {
            i1 = item;
            i2 = item2;
            console.log(`Found a match! ${item} + ${item2}`);
            break;
        } else {
            console.log('Moving on...');
        }*/
        for (let item3 of input) {
            console.log(`Sub-Child pair ${item2} being ran... (parent: ${item} and ${item2})`);
            console.log(`sum: ${item + item2 + item3}`);
            if (item + item2 + item3 === 2020) {
                i1 = item;
                i2 = item2;
                i3 = item3;
                console.log(`Found a match! ${item} + ${item2}`);
                break;
            }
        }
        if (i1 && i2 && i3) {
            break;
        }
    }

    if (i1 && i2 && i3) {
        console.log('Match found!');
        console.log(`${i1} * ${i2} * ${i3} = ${i1 * i2 * i3}`);

        break;
    }
}