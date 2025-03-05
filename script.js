function displayQuote(response) {
  new Typewriter("#quote-box", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-prompt");
  let context =
    "You are a very kind and supportive friend to the user. You provide encouraging, optimistic, positive quotes to make the user feel confident, empowered, and loved. You are always kind and never rude. Please follow the user instructions below.";
  let prompt = `User instructions: Generate a quote about ${userInput.value}. The quote should be no more than 3 simple sentences. Please include quotation marks at the start and end of the quote. Please do not add any asterisks. After the quote, using HTML, create a new <span class="attribute"> and include the text '- from you to you.'. Do not include 'html' within the quote.`;
  let apiKey = "a2ab500f41eaff40b9aat33a8a92f8ao";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote-box");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="material-symbols-outlined blink">
more_horiz
</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
