const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


let apiQuotes = [];

function newQuote() {
  let randomQuote = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[randomQuote];

  if (!quote.author) {
    authorText.textContent = "Unknown"
  } else {
    authorText.textContent = quote.author
  }

  if (quote.text.length > 50) {
    console.log("LONG TEXT DUDE!!!!!!");
    quoteText.classList.add("long-quote")
  } else {
    quoteText.classList.remove("long-quote")
  }

  quoteText.textContent = quote.text
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote()
    
  } catch (error) {
    
  }
}

getQuotes()