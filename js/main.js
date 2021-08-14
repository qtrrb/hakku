let TopStoriesRequestURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
let request = new XMLHttpRequest();

request.open('GET', TopStoriesRequestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const IDs = request.response;
    for (let i=0;i<10;i++) {
        getContentFromID(IDs[i])
    }
}

function getContentFromID(StoryID) {
    let StoryRequestURL = `https://hacker-news.firebaseio.com/v0/item/${StoryID}.json?print=pretty`;
    let request_story = new XMLHttpRequest();
    request_story.open('GET', StoryRequestURL);
    request_story.responseType = 'json';
    request_story.send();
    request_story.onload = function() {
        console.log(request_story.response)
    }
}