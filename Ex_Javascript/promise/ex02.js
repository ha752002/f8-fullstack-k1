var users = [
    {
        id: 1,
        name: 'Ha',
    },
    {
        id: 2,
        name: 'Phat',
    },
    {
        id: 3,
        name: 'Huy',
    },
];

var comment = [
    {
        id: 1,
        content: 'hi !!! ',
        user_id: 1,
    },
    {
        id: 2,
        content: 'oke',
        user_id: 2,
    }
];

function getComment() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comment);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

getComment()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        });

        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function (data) {
        var commentBlock = document.getElementById("comment-block");
        var html = '';

        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });
            html += `${user.name} : ${comment.content}<br>`;
        });

        commentBlock.innerHTML = html;
    })
    .catch(function (error) {
        console.error(error);
    });