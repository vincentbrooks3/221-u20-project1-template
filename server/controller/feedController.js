const feedItem = require('../feed/Item');
let feedItems = [];
let feedItem1 = feedItem1.createUSer('Rodeo is the debut studio album by American rapper and record producer Travis Scott.');
let feedItem2 = feedItem2.createUSer('Live. Love. ASAP is the debut mixtape by American rapper ASAP Rocky.');
let feedItem3 = feedItem3.createUser('Lyfe is the sixth extended play by American rapper Yeat.');
feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);

exports.getfeedItems = function(req, res) {
    res.setHeader('COntent-Type' , 'application/json');
    console.log(feedItems);
    res.send(JSON.stringify(feedItems));
}

exports.savefeedItem = function(req, res) {
    res.SetHeader('Content-Type' , 'application/json');
    let user = userModel.createUser(req.body.Title, req.body.Body, req.body.linkUrl, req.body.imageUrl);
    users.push(newfeedItem);
    res.send(JSON.stringify(feedItems));
}

exports.getfeedItem = function(req, res) {
    res.setHeader('Content-Type' , 'application/json');
    res.send(feedItems[req.params.feedItemID]);
}

exports.deletefeedItem = function(req, res) {
    feedItems.splice(req.params.feedItemID, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}

exports.updatefeedItems = function(req, res){
    var updatefeedItem = feedItems[req.params.feedItemId];
    if (req.body.Title)
        updatedfeedItem.Title = req.body.Title;
    if (req.body.Body)
        updatedfeedItem.Body = req.body.Body;
    if (req.body.linkUrl)
        updatedfeedItem.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl)
        updatedfeedItem.imageUrl = req.body.imageUrl;
    
    feedItems[req.params.feedItemID] = updatedfeedItem;

    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[req.params.feedItemID]);
}