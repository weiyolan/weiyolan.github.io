let text = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.";
let words = text.split(' ');
words = words.map(word => word.toLowerCase());
words = words.map(word => word.replace('.',''));

let htmlQuote = document.getElementById("quote");
let button = document.getElementById("button");

const k = 1.7;

const filterFunc = (word,i,arr) => {
    // console.log(word + ' vs. ' + arr[i+1]);
    return word != arr[i+1]; // (word,i,arr)
}

const getQuote = () => {
    let quote = [];
    let quoteLength = Math.floor(Math.random()*words.length/k);

    for (i=0 ; i<quoteLength-1 ; i++) {
        quote.push(words[Math.floor(Math.random()*words.length)]);
    }

    quote = quote.filter(filterFunc); 
    quote = quote.join(' ');
    quote = quote[0].toUpperCase() + quote.slice(1);
    quote = '-<br>' + quote + '.<br>-';

    return quote
}

// console.log(getQuote())

// const getQuote = () => {
//     let quote = words[Math.floor(Math.random()*words.length)];
//     let quoteLength = Math.floor(Math.random()*words.length/1.5);

//     for (i=0 ; i<quoteLength-1 ; i++) {
//         quote += ' ' + words[Math.floor(Math.random()*words.length)];
//     }

//     quote = quote[0].toUpperCase() + quote.slice(1);
//     quote = '-<br>' + quote + '.<br>-';

//     return quote
// }

const saveQuote = () => {
    htmlQuote.innerHTML = getQuote();
};

button.addEventListener("click",saveQuote);


