// Get the form element
const form = document.getElementById("submission");

// Arrow function to handle form submission
const formSubmit = (event) => {
    event.preventDefault(); // Stop the default GET request

    alert("Form has been submitted"); // Alert confirmation

    // Log the first three input values
    for (let i = 0; i < 3; i++) {
        console.log(event.target[i].value);
    }
};

// Register submit event
form.addEventListener("submit", formSubmit);

// Get the name input element
const nameInput = document.querySelector('[name="name"]');

// Arrow function to validate name length
const validateNameLength = (event) => {
    if (event.target.value.length < 2) {
        alert("Name not long enough");
        nameInput.focus();
    }
};

// Register change event for name input
nameInput.addEventListener("change", validateNameLength);