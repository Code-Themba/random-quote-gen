# Random Quote Generator

A lightweight web app that fetches random motivational quotes from the API Ninjas Quotes endpoint. Built with plain HTML, CSS, and JavaScript, this project demonstrates DOM manipulation, asynchronous requests, responsive design, and user feedback patterns.

---

## Table of Contents

1. [Demo](#demo)  
2. [Features](#features)  
3. [Project Structure](#project-structure)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Code Overview](#code-overview)  
   - [HTML](#html)  
   - [CSS](#css)  
   - [JavaScript](#javascript)  
7. [Responsive Design](#responsive-design)  
8. [Best Practices & Recommendations](#best-practices--recommendations)  
9. [Future Enhancements](#future-enhancements)  
10. [License](#license)  

---

## Demo

Open `index.html` in your browser to see the app in action.  
Click **Generate Quote** to fetch and display a new quote. A spinner indicates loading, and the button is disabled to prevent duplicate requests.

---

## Features

- Fetch random quotes from API Ninjas  
- Loading spinner with button disabling  
- Error handling with user feedback  
- Responsive layout for mobile, tablet, desktop, and TV  

---

## Project Structure

```
random-quote/
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
├─ index.html
├─ package.json (optional)
└─ README.md
```

---

## Getting Started

1. Clone the repo:  
   ```
   git clone https://github.com/your-username/random-quote.git
   ```
2. Insert your API key in `js/main.js`:  
   ```js
   headers: {
     "X-Api-Key": "YOUR_API_KEY_HERE",
   },
   ```
3. Open `index.html` in your browser.

---

## Usage

- Click the **Generate Quote** button to fetch a new quote.  
- While loading, the button is disabled and a spinner is shown.  
- On success, the quote and author are displayed; on failure, an error message appears.  

---

## Code Overview

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Random Quote Generator</title>
    <link rel="stylesheet" href="./css/styles.css"/>
  </head>
  <body>
    <header>
      <p class="logo">💬Random Quote Generator</p>
    </header>
    <main>
      <div class="hero">
        <h1>Generate A Quote</h1>
      </div>
      <p class="motivation">Get a quote and get motivated today.😁</p>
      <div class="quote-box">
        <div id="quote-display-area"></div>
        <div id="loading-spinner" class="spinner hidden"></div>
      </div>
      <button id="get-quote-button" class="get-quote-button">
        Generate Quote
      </button>
    </main>
    <script src="./js/main.js"></script>
  </body>
</html>
```

Key points:  
- Semantic elements (`header`, `main`) for accessibility.  
- Container for quotes and spinner.  
- CSS and JS linked externally.

### CSS

```css
/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Base Styles */
html, body {
  font-size: 18px;
  font-family: "Gill Sans", Calibri, sans-serif;
  color: #333;
  overflow: hidden;
}

header {
  width: 100%;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #1f1e1e;
  box-shadow: 15px 0 15px #333;
}

.logo {
  font-size: 30px;
  font-weight: 600;
}

main {
  width: 60%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 450px;
  max-height: 500px;
}

.hero, .motivation, .quote-box {
  width: 60%;
  margin: auto;
}

.hero {
  letter-spacing: 0.1em;
  padding: 2px;
}

.motivation {
  padding: 5px;
  color: #666;
}

.quote {
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
}

.author {
  color: #555;
  margin: 2.5rem 0 0.1rem 0;
}

.get-quote-button {
  width: 80%;
  padding: 8px;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  background-color: #107aec;
  color: #fff;
  font-size: 18px;
  transition: transform 0.5s ease;
}

.get-quote-button:hover {
  background-color: #2d90fa;
  transform: scale(0.95);
  cursor: pointer;
}

/* Spinner */
.spinner {
  width: 40px;
  height: 40px;
  margin: 1rem auto;
  border: 4px solid #ccc;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
.hidden {
  display: none;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Disabled Button */
.get-quote-button:disabled {
  background: #aaa;
  cursor: not-allowed;
}

/* Responsive Media Queries */
/* Smartphones */
@media (max-width: 480px) {
  html, body { font-size: 16px; overflow: auto; }
  .logo { font-size: 20px; }
  main, .quote-box, .hero, .motivation { width: 90%; margin: 2rem auto; }
  .quote { font-size: 20px; }
  .get-quote-button { width: 100%; font-size: 16px; }
  .spinner { width: 30px; height: 30px; }
}

/* Tablets */
@media (min-width: 481px) and (max-width: 768px) {
  html, body { font-size: 17px; }
  .logo { font-size: 24px; }
  main, .quote-box, .hero, .motivation { width: 80%; }
  .quote { font-size: 22px; }
  .get-quote-button { width: 80%; font-size: 17px; }
  .spinner { width: 35px; height: 35px; }
}

/* Desktop */
@media (min-width: 769px) and (max-width: 1440px) {
  html, body { font-size: 18px; }
  main, .quote-box, .hero, .motivation { width: 60%; }
  .quote { font-size: 24px; }
  .get-quote-button { width: 300px; }
}

/* Large Screens & TVs */
@media (min-width: 1441px) {
  html, body { font-size: 20px; }
  .logo { font-size: 36px; }
  main, .quote-box, .hero, .motivation { width: 50%; }
  .quote { font-size: 28px; }
  .get-quote-button { width: 320px; font-size: 20px; }
}
```

### JavaScript

```js
const displayQuoteArea = document.getElementById("quote-display-area");
const getQuoteButton  = document.getElementById("get-quote-button");
const spinner         = document.getElementById("loading-spinner");

// Fetch and display a new quote
async function getQuotes() {
  getQuoteButton.disabled = true;
  spinner.classList.remove("hidden");
  displayQuoteArea.innerHTML = "";

  try {
    const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "YOUR_API_KEY_HERE",
      },
      "Content-Type": "application/json",
    });

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();
    formatQuote(data[0]);
  } catch (error) {
    displayQuoteArea.textContent = "Oops! Couldn't get quote. Please try again.";
    console.error(error);
  } finally {
    spinner.classList.add("hidden");
    getQuoteButton.disabled = false;
  }
}

// Render quote in the DOM
function formatQuote({ quote, author }) {
  const result = `
    <div>
      <p class="quote">${quote}</p>
      <p class="author">- ${author || "Unknown"}</p>
    </div>
  `;
  displayQuoteArea.innerHTML = result;
  getQuoteButton.innerText = "Generate Another Quote";
}

// Event listener
getQuoteButton.addEventListener("click", getQuotes);
```

---

## Responsive Design

This project uses mobile-first CSS with breakpoints for:

- Smartphones (<=480px)  
- Tablets (481px–768px)  
- Desktops (769px–1440px)  
- Large screens & TVs (>=1441px)  

Each breakpoint adjusts font sizes, container widths, and element spacing for optimal readability.

---

## License

[MIT License](LICENSE)  

