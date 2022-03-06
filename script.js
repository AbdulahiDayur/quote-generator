let apiQuotes = [];

function newQuote() {
  let randomQuote = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[randomQuote];
  console.log(quote);
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