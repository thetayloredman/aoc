// this one we need to parse
let input = require('fs').readFileSync('./input', 'utf8');

input = input.split('\n');

// parse inputs
function parseIn(inv) {
    let current = 0;
    let out = {
        rule: {
            min: undefined,
            max: undefined,
            char: undefined
        },
        value: undefined
    }
    out.rule.min = (function() {
        let val = '';
        while (!isNaN(inv[current])) {
            val += inv[current];
            current++;
        }

        return Number(val);
    })();
    if (inv[current++] !== '-') {
        console.error('error: expected - got different');
        process.exit(1);
    }
    out.rule.max = (function() {
        let val = '';
        while (!isNaN(inv[current])) {
            val += inv[current];
            current++;
        }

        return Number(val);
    })();
    
    out.rule.char = inv[current++]
    current++;
    current++;
    out.value = inv.slice(current);
    return out;
}

for (let i = 0; i < input.length; i++) {
    input[i] = parseIn(input[i]);
}

let count = 0;

for (let item of input) {
    const countOfChar = (eval(`item.value.match(/${item.rule.char}/g)`) || []).length
    console.log(`${item.value}: ${countOfChar} x ${item.rule.char}`);
    if (countOfChar >= item.rule.min && countOfChar <= item.rule.max) {
        console.log('ok');
        count++;
    }
}

console.log(count);