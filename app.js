const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let t = {};

// t['a'] = [['e', 3], ['c', 18]];
// t['b'] = [['a', 8], ['c', 4]];
// t['c'] = [];
// t['d'] = [['b', 1]];
// t['e'] = [['d', 2], ['b', 10]];
t['e'] = [['f', 3]];
t['f'] = [['h', 1]];
t['h'] = [['g', 2]];
t['g'] = [['f', -4], ['e', 3]];

let s = 'e';//deppart
let terminal = {};
let changed = [s];
let tempchanged = [];

for (const key in t) {
    terminal[key] = 'infinity'; 
}

for (const key in t) {
    if (key === s) {
        terminal[key] = 0
    }
}
console.log('terminal 1: ', terminal);

for (let i = 0; i < 4; i++) {
    for (const key of changed) {
        t[key].forEach(([relatedKey, value]) => {
            console.log(`  - terminal[${relatedKey}]: `, terminal[relatedKey], ` avec un poids de ${value}`);

            if (terminal[relatedKey] > value + terminal[key]) {
                terminal[relatedKey] = value + terminal[key]
                console.log(`  - apres terminal[${relatedKey}]: `, terminal[relatedKey]);

                tempchanged.push(relatedKey)
            }
            if (terminal[relatedKey] === 'infinity') {
                terminal[relatedKey] = value + terminal[key]
                console.log(`  - apres terminal[${relatedKey}]: `, terminal[relatedKey]);

                tempchanged.push(relatedKey)
            }
        });
    }

    changed = tempchanged
    tempchanged = []
    console.log(i + 1, ' changed: ', changed);

    if (i === 3 && changed.length !== 0) {
        console.log('presence d un boucle negative!!!')
    }

}





console.log('terminal 2: ', terminal);
console.log('changed: ', changed);