// quotes array with 5 objects
let quotes = [
    {
        quote :  "Your scientists were so preoccupied with whether they could, they didn't stop to think if they should.",
        source : 'Ian Malcolm',
        citation: 'Jurassic Park',
        year: 1993,
        genre: 'Thriller'
    },
    {
        quote :  "Welcome... to Jurassic Park.",
        source : 'John Hammond',
        citation: 'Jurassic Park',
        year: 1993,
        genre: 'Science Fiction'
    },
    {
        quote :  "Help me, Obi-Wan Kenobi. You’re my only hope.",
        source : 'Leia Organa',
        citation: 'Star Wars',
        year: 1977,
        genre: 'Adventure'
    },
    {
        quote :  "I’m one with the Force. The Force is with me.",
        source : 'Chirrut Îmwe',
        citation: 'Star Wars',
        year: 2016,
        genre: 'Action'
    },
    {
        quote :  "May the Force be with you.",
        source : 'Han Solo',
        citation: 'Star Wars',
        year: 1977,
        genre: 'Science Fiction'
    },
]

// background color array
let colors = ['#DCEC23', '#23A3EC', '#81E31F', '#1FE3BC', '#1FE3A2'];

// function to get random quote
let getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

// function to get random color
let getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

/**
 * function that takes the random object
 * and appends it to the DOM
 */
let printQuote = () => {
    let randomQuote = getRandomQuote();
    let randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;

    let quoteHTML = `
        <p class="quote"> ${randomQuote.quote} </p>
        <p class="source"> ${randomQuote.source}
    `;

    /* checks to see if quote has a citation key
    and if so it appends the value to the DOM */
    if ( randomQuote.citation ) {
        quoteHTML += `<span class="citation"> ${randomQuote.citation} </span>`;
    }

    /* checks to see if quote has a year key
    and if so it appends the value to the DOM */
    if ( randomQuote.year ) {
        quoteHTML += `<span class="year"> ${randomQuote.year} </span>`;
    }

    if ( randomQuote.genre) {
        quoteHTML += `<span class="genre" <strong>${randomQuote.genre}</strong> </span>`;
    }

    quoteHTML += '</p>';
    document.querySelector('#quote-box').innerHTML = quoteHTML;
}

// set interval method so that a new quote is generated every 10 seconds
setInterval(printQuote, 10000);

/* event listener to respond to "Show another quote" button clicks
when user clicks anywhere on the button, the "printQuote" function is called */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

