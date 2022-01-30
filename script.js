var qoutes = document.getElementsByClassName('quotes');
var author = document.getElementsByClassName('author');
var button = document.getElementById('button');

let realdata = "";
let quotesdata = "";
let quotesauthor = "";
const newQuotes = () => {
    let randomvalue = Math.floor((Math.random() * 1642) + 1);
    quotesdata = realdata[randomvalue].text;
    qoutes[0].innerHTML = quotesdata;
    quotesauthor = realdata[randomvalue].author;
    if (quotesauthor == null) {
        author[0].innerHTML = "unknown";

    }
    else {
        author[0].innerHTML = quotesauthor;

    }




}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        const data = await fetch(api);
        realdata = await data.json();
        newQuotes();


    } catch (error) {
        console.log("error");
    }
};
button.addEventListener("click", newQuotes);
twitter.addEventListener("click", () => {
    const tweetpost = `https://twitter.com/intent/tweet?text=${quotesdata} ~ ${quotesauthor}`;
    console.log(tweetpost)
    window.open(tweetpost);

});

getQuotes();