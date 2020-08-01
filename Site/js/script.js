var quotes = ['The Road Not taken', 'fdjsnfjksdbfjsbdf', 'fkdnsjkfbsfsdf',
'djkfbasdjkfbjsdfbj', 'fsdjbfwehrirewrhw', 'feirhqeiwbfebf']

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}