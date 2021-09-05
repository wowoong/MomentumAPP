const quotes = [
  {
    quote: "Learn from yesterday, live for todday, look to tomorrow, rest this afternoon.",
    author: "A",
  },
  {
    quote: "Be  grateful for what you have.",
    author: "B",
  },
  {
    quote: "Live the present.",
    author: "C",
  },
  {
    quote: " Worrying won't stop the bad from happening, it just stops you from enjoying the good.",
    author: "D",
  },
  {
    quote: "Never stress what you can't control and dnever worry about what isn't yours.",
    author: "E",
  },
  {
    quote: "I  don't have time to worry about who ddoesn't like me, I am too busy loving the people who love me.",
    author: "F",
  },
  {
    quote: "Sometimes the most ordinary things could be made extraordinary, simply by doing that with the right person.",
    author: "G",
  },
  {
    quote: "Be yourself. No one can say you're doing it worng.",
    author: "H",
  },
  {
    quote: "The problem with closed-minded people is that their mouth is always open.",
    author: "I",
  },
  {
    quote: "At any time, happiness comes after frustration like the sun comes out after rain.",
    author: "J",
  },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;