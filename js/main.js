const displayQuoteArea = document.getElementById("quote-display-area");
const getQuoteButton = document.getElementById("get-quote-button");
const spinner = document.getElementById("loading-spinner");

// Function To Generate Quotes
async function getQuotes() {
  // Loading State...
  getQuoteButton.disabled = true;
  spinner.classList.remove("hidden");
  displayQuoteArea.innerHTML = "";

  try {
    const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "XwODeE4Nb6pNmSS0xrRQcw==aRZhmVkNMo5LE4Pw",
      },
      "Content-Type": "application/json",
    });
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();
    formatQuote(data[0]);
  } catch (error) {
    displayQuoteArea.textContent =
      "Oops! Couldn't get quote. Please Try again.";

    console.error(error);
  }
  spinner.classList.add("hidden");
  getQuoteButton.disabled = false;
}

function formatQuote({ quote, author }) {
  const result = `
    <div>
        <p class="quote">${quote}</p>
        <p class="author">- ${author}</p>
    </div>
`;

  displayQuoteArea.innerHTML = result;
  getQuoteButton.innerText = "Generate Another Quote";
}

getQuoteButton.addEventListener("click", (e) => {
  getQuotes();
});
