// Step 4: Create the darthVader object
let darthVader = {
    allegiance: 'Empire',
    weapon: 'lightsaber',
    sith: true
};

// Step 5–7: Log individual properties
console.log(darthVader.allegiance); // Empire
console.log(darthVader.weapon);     // lightsaber
console.log(darthVader.sith);       // true

// Step 8: Log number of properties
console.log(Object.keys(darthVader).length); // 3

// Step 9–10: Add new key/value pairs
darthVader.children = 2;
darthVader.childNames = ['Luke', 'Leia'];

// Step 11–13: Log new properties
console.log(darthVader.children);    // 2
console.log(darthVader.childNames);  // ['Luke', 'Leia']

// Step 14–15: Iterate over object and log each key/value
for (let key in darthVader) {
    console.log(`${key}: ${darthVader[key]}`);
}

// Step 16: Delete the 'children' property
delete darthVader.children;

// Step 17: Log object after deletion
console.log(darthVader);

// Step 18: Destructure object into variables
let { allegiance, weapon, sith, childNames } = darthVader;

// Step 19: Log each destructured variable
console.log(allegiance);   // Empire
console.log(weapon);       // lightsaber
console.log(sith);         // true
console.log(childNames);   // ['Luke', 'Leia']

// Step 20: Clear object and log it
darthVader = {};
console.log(darthVader);   // {}