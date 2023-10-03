const apiUrl = `http://localhost:3000/users`;

const getUsers = async () => {
    const response = await fetch(apiUrl);
    // console.log(response);

    const users = await response.json();

    // console.log(users);

    document.body.innerHTML = users.map(({ name, email }) => `<h2>${name}</h2><h3>${email}</h3>`).join('');
}

getUsers();


const getUser = async (id) => {
    const response = await fetch(apiUrl + '/' + id);
    const user = await response.json();
    console.log(user);
}

getUser(1)



const post = async (data) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        console.log('them thanh cong');
    }
}

// post({
//     "name": "User 4",
//     "email": "user4@example.com"
// })