const colors = ['#7266b4', '#38aa5e', '#b47c66', '#c02956', '#2989c0'];

let quotesData;

const getRandomColor = function() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const getAllQuotes = function() {
  return $.ajax({
    headers: {
      Accept: "application/json"
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function(jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
       
      }
    }
  });
}

const getRandomQuote = function(){
  
    return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)]

  
  
}

const setRandomQuote = function(){
  
  getAllQuotes().then(() => {
    
    let randomQuote = getRandomQuote(); 
     currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
    $('#text').text(randomQuote.quote);
    $('#author').text(randomQuote.author);
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote  + '" ' + currentAuthor));
   
})
  } 
  
  
  
 

const setRandomColor = function() {
  
  let color = getRandomColor();
  $('body').css("background", color);
  $('#tweet-button').css("background", color);
  $('#tumblr-quote').css("background", color);
  $('#new-quote').css("background", color);
  $('#text').css("color", color);
  $('#author').css("color", color);
}

$(document).ready(function(){
  
  
  setRandomQuote();
   setRandomColor();
   $("#new-quote").click(setRandomColor);
  $("#new-quote").click( setRandomQuote);

})