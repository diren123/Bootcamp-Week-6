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

