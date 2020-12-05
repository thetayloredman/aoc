// this is a fun one, very similar to https://kais.blog/p/advent-of-code-2020-day-5-solution-typescript/, but I didn't steal it!
const input = require('fs').readFileSync('./input', 'utf8').split('\n');

const binLines = input.map((line) => line.replace(/F/g, '0').replace(/B/g, '1').replace(/L/g, '0').replace(/R/g, '1'));


binLines.sort();

let _id = null;

for (let l of binLines) {
    const r = parseInt(l.slice(0, 7), 2),
          c = parseInt(l.slice(7, 10), 2);
    
    const id = r * 8 + c;

    if (_id !== null && id !== _id + 1) {
        console.log(id - 1);
        break;
    }

    _id = id;
}