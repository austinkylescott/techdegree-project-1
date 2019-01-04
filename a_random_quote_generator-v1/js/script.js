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
    quote: "Unless someone like you cares a whole awful lot nothing's going to get better, it's not.",
    source: "Dr. Seuss",
    citation:"Book 'The Lorax'",
    tag: "Inspiration"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    year: 1991,
    tag: "Motivation"
  },
  {
    quote: "To infinity... and beyond!",
    source: "Buzz Lightyear",
    year: 1995,
    citation:"Movie: 'Toy Story'",
    tag:"Motivation"
  },
  {
    quote: "The ultimate measure of a man is not where he stands in moments of convenience and comfort, but where he stands in moments of challenge and controversy.",
    source: "Martin Luther King, Jr.",
    year: 1963,
    citation: "Book: 'Strength to Love'",
    tag: "Inspiration"
  },
  {
    quote: "I'm Mary Poppins, y'all!",
    source: "Yondu",
    year: 2017,
    citation: "Movie: 'Guardians of the Galaxy 2'",
    tag: "Joke"
  },
  {
    quote: "You can become famous but you can't become unfamous. You can become infamous but not unfamous.",
    source: "Dave Chappelle",
    tag: "Fame"
  },
  {
    quote: "In the end, that's what this election is about. Do we participate in a politics of cynicism or a politics of hope?",
    source: "Barack Obama",
    citation: "Speech",
    tag: "Politics"
  }
];


//Picks random quote object and returns it
function getRandomQuote(array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}

//Calls getRandomQuote() and generates HTML required to display quote information
function printQuote () {
  var quote = getRandomQuote(quotes); //sets current quote to randomly selected quote object
  var html = "";

  html+= '<p class = "quote">' + quote.quote + ' </p>';   //Adds quote to html string
  html+= '<p class = "source">' + quote.source;            //Adds source/author to html string

  if(quote.citation !== null && quote.citation !== undefined) {       //Check if citation is not null or undefined
    html+= '<span class = "citation">' + quote.citation + ' </span>'; //Add citation to html string
  }

  if(quote.year !== null && quote.year !== undefined) {               //Check if year is not null or undefined
    html+= '<span class = "year">' + quote.year + ' </span>';         //Add year to html string
  }

  if(quote.tag !== null && quote.tag !== undefined) {
    html+= '<span class = "tag">' + quote.tag + ' </span>';

  }

  html+= ' </p>'; //Closing </p> source tag


  document.getElementById("quote-box").innerHTML = html;  //update quote html

  var color = getRandomColor();
  document.body.style.backgroundColor = color; //sets background color to rgb string
  document.getElementById("loadQuote").style.backgroundColor = color; //sets button color to same string
}

function getRandomRGBValue(){
  return Math.floor(Math.random() * 256);
}

function getRandomColor () {      //generates RGB values and returns a string
  var r = getRandomRGBValue();
  var g = getRandomRGBValue();
  var b = getRandomRGBValue();
  return "rgba("+ r +"," + g +","+ b+",1)";
}


var timer = setInterval(printQuote,15000); //Prints a new quote every 15 seconds

//Calls printQuote() and changes the quote to our generated HTML
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
