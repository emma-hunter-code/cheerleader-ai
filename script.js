function displayQuote(response) {
  console.log("generated");
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
    "You are a very kind and supportive friend to the user. You provide encouraging, optimistic, positive quotes to make the user feel confident, empowered, and loved. Please follow the user instructions below.";
  let prompt = `User instructions: Generate a quote about ${userInput.value}. The quote should be no more than 3 simple sentences. Please provide this in basic HTML format. Please include quote marks at the start and end of the quote. After the quote, on a new line, please attribute the quote from '- from you to you.' and put this inside a <span> element with the class of 'attribute'. Please do not add any asterisks and do not include 'html' within the quote.`;
  let apiKey = "a2ab500f41eaff40b9aat33a8a92f8ao";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
