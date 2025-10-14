// Step 4: Create a new Map object
const hanSolo = new Map();

// Add key/value pairs
hanSolo.set("vehicle", "Millennium Falcon");
hanSolo.set("bff", "Chewbacca");
hanSolo.set("sweetheart", "Leia");

// Step 5–9: Access and log properties
console.log("Map size:", hanSolo.size); // Size of the map
console.log("Han Solo's vehicle:", hanSolo.get("vehicle")); // Get vehicle
console.log("Has sweetheart?", hanSolo.has("sweetheart")); // Check if sweetheart exists
console.log("Is Han Solo a Jedi?", hanSolo.has("jedi")); // Check if 'jedi' key exists

// Step 10: Add new key/value pair
hanSolo.set("son", "Ben");
console.log("Han Solo's son:", hanSolo.get("son"));

// Step 11: Iterate over the map
console.log("Iterating over hanSolo map:");
for (const [key, value] of hanSolo) {
  console.log(`${key}: ${value}`);
}

// Step 12–15: Manipulate the map
// Change bff to Luke
hanSolo.set("bff", "Luke");
console.log("Updated bff:", hanSolo.get("bff"));

// Delete the 'son' key
hanSolo.delete("son");
console.log("Deleted 'son'. Current map:");
for (const [key, value] of hanSolo) {
  console.log(`${key}: ${value}`);
}

// Clear the map
hanSolo.clear();
console.log("Map after clearing:", hanSolo);