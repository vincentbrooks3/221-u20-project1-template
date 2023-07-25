function feedItem(Title, Body, linkUrl, imageUrl){
    this.Title = Title;
    this.Body = Body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

exports.createUser = function createUser(Title, Body, linkUrl, imageUrl) {
    return new user(Title, body, linkUrl, imageUrl);
}