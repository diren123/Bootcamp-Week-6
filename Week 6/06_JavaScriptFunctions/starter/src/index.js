const movies = [
  {
    title: "Jaws",
    director: "Steven Spielberg",
    year: "1975"
  },
  {
    title: "Star Wars",
    director: "George Lucas",
    year: "1977"
  },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    year: "2018"
  },
  {
    title: "Top Gun",
    director: "Tony Scott",
    year: "1986"
  },
  {
    title: "Justice League",
    director: "Zack Snyder",
    year: "2017"
  }
];


// Part 1: Function to find and log movie details
function findMovie(movieTitle) {
  console.log("Searching for movie:", movieTitle);

  for (const movie of movies) {
    if (movie.title === movieTitle) {
      console.log("Movie found!");
      console.log("Title:", movie.title);
      console.log("Director:", movie.director);
      console.log("Year:", movie.year);
    }
  }

  console.log("Search complete.");
}

findMovie("Star Wars");
findMovie("Thor: Ragnarok"); // This will not find a match

// Part 2: Function to return movie object or message
function returnMovie(movieTitle){
  for (const movie of movies) {
    if (movie.title === movieTitle) {
      return movie;
    }
  }
  return `Movie titled "${movieTitle}" not found.`;
}

const movie1 = returnMovie("Jaws");
const movie2 = returnMovie("Thor: Ragnarok");

console.log("Returned movie 1:", movie1);
console.log("Returned movie 2", movie2);

console.log("Part 3");

// Part 3: Function to log movie details passed as argument
function myMovieDetails(movie) {
  if (typeof movie === "string") {
    console.log(movie); // This is the "not found" message
  } else {
    console.log("Movie Details: ");
    console.log("Title: ", movie.title)
    console.log("Director: ", movie.director);
    console.log("Year: ", movie.year);
  }
}

console.log("Part 4");

// Part 4: Passing function result as argument
myMovieDetails(returnMovie("Jaws"));
myMovieDetails(returnMovie("Thor: Ragnarok"));
