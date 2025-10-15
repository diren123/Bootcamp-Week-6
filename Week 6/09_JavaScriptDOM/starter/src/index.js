const colours = 
[
    'red', 'green',
    'blue', 'orange',
    'lime', 'olive',
    'black', 'yellow'
]


// Function to build multiple paragraphs inside a placeholder element
function buildP(placeholder, num) {
    let i = 0;

    do {
        // Create a new paragraph element
        const p = document.createElement('p');

        // Create a text node with a message
        const text = document.createTextNode('Have you tried turning it off and back on again?');

        // Append the text to the paragraph
        p.appendChild(text);

        // Assign a random color from the colours array
        p.style.color = colours[Math.floor(Math.random() * colours.length)];

        // Append the paragraph to the placeholder element
        placeholder.appendChild(p);

        i++;
    } while (i < num);
}

// Call the function with the placeholder element and number of paragraphs
const num = Math.floor(Math.random() * 5) + 1;
buildP(document.querySelector('#placeholder'), num);
