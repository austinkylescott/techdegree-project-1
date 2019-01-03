/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

var quotes = [
  {
    quote: "hahahaha",
    source: "John John",
    citation:"Dictionary"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    year: 1991
  },
  {
    quote: "To infinity... and beyond!",
    source: "Buzz Lightyear",
    year: 1995,
    citation:"Movie: 'Toy Story'"
  },
  {
    quote: "The ultimate measure of a man is not where he stands in moments of convenience and comfort, but where he stands in moments of challenge and controversy.",
    source: "Martin Luther King, Jr.",
    year: 1963,
    citation: "Book: 'Strength to Love'"
  },
  {
    quote: "I'm Mary Poppins, y'all!",
    source: "Yondu",
    year: 2017,
    citation: "Movie: 'Guardians of the Galaxy 2'"
  }
];


//Picks random quote object and returns it
function getRandomQuote(array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}

//Calls getRandomQuote() and generates HTML required to display quote information
function printQuote () {
  var quote = getRandomQuote(quotes);
  var html = "";

  html+= '<p class = "quote">' + quote.quote + ' </p>';   //Adds quote to html string
  html+= '<p class = "source">' + quote.source;            //Adds source/author to html string

  if(quote.citation !== null && quote.citation !== undefined) {       //Check if citation is not null or undefined
    html+= '<span class = "citation">' + quote.citation + ' </span>'; //Add citation to html string
  }

  if(quote.year !== null && quote.year !== undefined) {               //Check if year is not null or undefined
    html+= '<span class = "year">' + quote.year + ' </span>';         //Add year to html string
  }

  html+= ' </p>'; //Closing </p> source tag


  console.log(html);

  document.getElementById("quote-box").innerHTML = html;
  document.body.style.backgroundColor = "red";
}




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
