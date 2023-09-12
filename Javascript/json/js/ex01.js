var users = [
    {
        id: 1,
        name: 'John',
        email: 'join@gmail.com',
    },
    {
        id: 2,
        name: 'Mary',
        email: 'mary@gmail.com',
    },
    {
        id: 3,
        name: 'Peter',
        email: 'peter@gmail.com',
    },
];


var json = JSON.stringify(users);

var users = JSON.parse(json);