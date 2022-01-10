function getMessageByAuthor(listOfPosts, nameAuthor) {
    let countMessages = 0;
    let countComments = 0;

    listOfPosts.forEach((item) => {
        if (item['author'] === nameAuthor) {
            countMessages = countMessages + 1
        }
        if (item.hasOwnProperty('comments')) {
            item['comments'].forEach((elem) => {
                if (elem['author'] === nameAuthor) {
                    countComments = countComments + 1;
                }
            })
        }
    })
    return 'post - ' + countMessages + ', ' + 'comments - ' + countComments;
}

module.exports = getMessageByAuthor;