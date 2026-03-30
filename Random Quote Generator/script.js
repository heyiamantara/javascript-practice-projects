const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('newQuoteBtn');

async function getQuote() {
    try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();

        quote.textContent = `"${data.content}"`;
        author.textContent = `- ${data.author}`;
    } catch (err) {
        quote.textContent = "An error occurred while fetching the quote.";
        author.textContent = "";
        console.error(err);
    }
}

getQuote();

button.addEventListener("click", getQuote);