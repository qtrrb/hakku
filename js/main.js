let TopStoriesRequestURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
let request = new XMLHttpRequest();

request.open('GET', TopStoriesRequestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const IDs = request.response;
    for (let i=0;i<10;i++) {
        console.log(IDs[i])
    }
}