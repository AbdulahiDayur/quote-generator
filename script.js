const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


let apiQuotes = [];

function newQuote() {
  let randomQuote = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[randomQuote];
  quoteText.textContent = quote.text
  authorText.textContent = quote.author
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