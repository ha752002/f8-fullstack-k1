

var users = [
    {
        id: 1,
        name: 'John',
    }, {
        id: 2,
        name: 'Hong Ha',
    }, {
        id: 3,
        name: 'Duy Phat',
    }
];


var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Sơn chưa ra video'
    }, {
        id: 2,
        user_id: 2,
        name: 'Vừa ra xong em ơi',
    }
];

// b1 lấy nd bình luận
// b1 gọi lên Api lấy comment

// b2 : từ comment lấy ra user_id
// từ user_id lấy ra user tương ứng

// fake Api 

function getComment() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}


function getUsersByIds(usersIds) {
    return new Promise(function (resolve) {
        setTimeout(function () {

            var result = users.filter(function (user) {
                return usersIds.includes(user.id);
            })

            setTimeout(function () {
                resolve(result);
            }, 1000);

        }, 1000);
    });
}


getComment()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        })


        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                };
            })
    })
    .then(function (users) {
        console.log(users);
    })

