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
  let prompt = `User instructions: Generate a 3 sentence quote about ${userInput.value}. Please don't add any asterisks to the quote. Please provide this is basic HTML. After the quote, please attribute the quote from '- from you to you' and put this inside a <span> element with the class of 'attribute'.`;
  let apiKey = "a2ab500f41eaff40b9aat33a8a92f8ao";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
