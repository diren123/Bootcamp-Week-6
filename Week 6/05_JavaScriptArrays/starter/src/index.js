// Step 4: Declare the array
let quote = ["I", "am", "your", "friend"];

// Step 5: Log the array to the console
console.log(quote);

// Step 7: Access and log the element that contains "your"
console.log(quote[2]);

// Step 9: Remove "friend" from the end using pop()
quote.pop();

// Step 10: Add "father" to the end using push()
quote.push("father");

// Step 11: Log the updated array
console.log(quote);

// Step 13: Add "Luke" to the start using unshift()
quote.unshift("Luke");

// Step 14: Log again to see the change
console.log(quote);

// Step 16: Declare erroneousWord (the misquoted word)
let erroneousWord = "Luke";

// Step 17: Check if the erroneous word exists
let lukeIsHere = quote.find(n => {
    return n === erroneousWord;
});

// Step 18: Declare lukeIsAt
let lukeIsAt;

// Step 19: If the word is found, find its index and replace it
if (lukeIsHere) {
    lukeIsAt = quote.findIndex(n => {
        return n === erroneousWord;
    });
    quote[lukeIsAt] = "No";
}

// Step 21: Log to confirm replacement
console.log(quote);

// Step 22: Create a variable for the output string
let output = "";

// Step 23–28: Loop through the array to build the sentence correctly
for (let i = 0, j = quote.length; i < j; i++) {
    if (i === j - 1) {
        // Last element → add exclamation mark
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        // If the word is "No", add a comma and a space
        output += quote[i] + ', ';
    } else {
        // Otherwise, just add a space
        output += quote[i] + ' ';
    }
}

// Step 29: Log the final, correct quote
console.log(output);
