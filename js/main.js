let TopStoriesRequestURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
let request = new XMLHttpRequest();

request.open('GET', TopStoriesRequestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const IDs = request.response;
    for (let i=0;i<30;i++) {
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
        addStoryContainer(request_story.response)
    }
}

function addStoryContainer(StoryID) {
    let template = document.querySelector(".story-template");
    let container = document.querySelector(".container");
    let clone = template.content.cloneNode(true)
    let title= clone.querySelector(".title");
    title.textContent = StoryID["title"];
    title.href = StoryID["url"]
    let by= clone.querySelector(".by");
    by.textContent = "by: " + StoryID["by"];
    let score= clone.querySelector(".score");
    score.textContent = "score: " + StoryID["score"];
    let descendants= clone.querySelector(".descendants");
    descendants.textContent = StoryID["descendants"] + " comments";
    container.appendChild(clone);
}