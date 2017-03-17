document.getElementById("submitComment").onclick = function() {
    var comment = document.getElementById("commentField").value;
    var newComment = document.createElement("div");
    var newCommentHeader = document.createElement("div");
    var newPara = document.createElement("P");
    var likeButton = document.createElement("button");
    likeButton.innerHTML = "Like";
    newCommentHeader.innerHTML = "anonymous <span> just now</span>";
    var textNode = document.createTextNode(comment);
    newComment.className = "comment__content";
    newCommentHeader.className = "comment__header new__comment";
    likeButton.className = "comment__likes";
    newPara.appendChild(textNode);
    document.getElementById("updatedComment").appendChild(newComment).appendChild(newPara);
    document.getElementById("commentField").value = "";
    newComment.parentNode.insertBefore(likeButton, newComment.nextSibling);
    newComment.parentNode.insertBefore(newCommentHeader, newComment);
};
