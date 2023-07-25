document.getElementById('portal_button').addEventListener('click', (event) => {
    goToLocation('http://my.marist.edu');
})

let feedItem1 = {
    title: 'Travis Scott - Rodeo',
    body: 'Rodeo is the debut studio album by American rapper and record producer Travis Scott.',
    linkUrl: 'https://open.spotify.com/album/4PWBTB6NYSKQwfo79I3prg?si=3e96b51LRii2Q2sn-Y-5kw',
    imageUrl: '/images/Rodeoalbum.jpg',
}

let feedItem2 = {
    title: 'A$AP Rocky - Live. Love. ASAP',
    body: 'Live. Love. ASAP is the debut mixtape by American rapper ASAP Rocky.',
    linkUrl: 'https://open.spotify.com/album/4l6EPpP9hjQrLb8qNB9eC5?si=G31OWaDnT62D7KrA5ptz3w',
    imageUrl: '/images/Live_Love_ASAP.jpg',
}

let feedItem3 = {
    title: 'Yeat - Lyfe',
    body: 'Lyfe is the sixth extended play by American rapper Yeat.',
    linkUrl: 'https://open.spotify.com/album/6Xo2PDEoQKzCndIbks2kvu?si=1Bzll-yASSuaMJI97sS7vw',
    imageUrl: '/images/download(3).jpg',
}

var currentStories = (feedItem1, feedItem2, feedItem3);

const currentStories = ["feedItem1", "feedItem2", "feedItem3"];

console.log(currentStories);

window.addEventListener("load", () => {
    for(var i=0; i < currentStories.length; i++){
        displayFeed(currentStories[i]);
    }
});

function displayItem(currentStories) {
   let feed = document.getElementById('newsfeed');
   feed.innerHTML += "<spam><img class='myImage' src ='"+ currentStories.imageUrl +"'>" + "</spam>";
   feed.innerHTML += "<spam><h2><a href= '" + currentStories.linkUrl + "'> " + currentStories.Title + "</a></h2></span>";
   feed.innerHTML += "<p>" + currentStories.Body + "</p>";
   feed.innerHTML += "<hr />";
}

function getCurrentFeed(){
    fetch("./api/feedItems").then(function(response){
        if (response.status !== 200) {
            console.log('problem with ajax call..' + response.status + 'msg:' + response.value);
            return;
        }
        response.json().then(function(date){
            var feedItemHtml = '<ol>';
            for(i in data) {
                displayFeed(data[i]);
            }
        });
    });
}

getCurrentFeed();