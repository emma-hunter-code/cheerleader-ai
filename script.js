function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote-box", {
    strings: `"Whatever the universe has in store for you is going to be amazing. Your thoughtfulness never fails to amaze me."`,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
