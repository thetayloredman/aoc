// this is a fun one, very similar to https://kais.blog/p/advent-of-code-2020-day-5-solution-typescript/, but I didn't steal it!
const input = require('fs').readFileSync('./input', 'utf8').split('\n');

const binLines = input.map((line) => line.replace(/F/g, '0').replace(/B/g, '1').replace(/L/g, '0').replace(/R/g, '1'));


binLines.sort();
binLines.reverse();

const r = parseInt(binLines[0].slice(0, 7), 2);
const c = parseInt(binLines[0].slice(7, 10), 2);

console.log(r * 8 + c)