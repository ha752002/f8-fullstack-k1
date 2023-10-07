const serverApi = ` http://localhost:3000`;

const postUser = async (data) => {
    //Chuyển từ Object => Urlencoded
    const dataUrlEncoded = new URLSearchParams(data).toString();


    const response = await fetch(`${serverApi}/users`, {
        method: 'POST',
        headers: {
            // "Content-Type": "application/json"
            "Content-Type": "application/x-www-form-urlencoded"
        },
        // body: JSON.stringify(data)
        body: dataUrlEncoded
    });

    console.log(response);
}

// postUser({
//     name: 'John1',
//     email: 'john1@example.com'
// });


const getUsers = async () => {
    const response = await fetch(`${serverApi}/users`);

    // hàm response.json() sẽ thực hiện việc giải mã dữ liệu JSON và trả về một Promise.
    const users = await response.json();
    // console.log(users);

    // lấy header
    console.log(response.headers.get('Content-Type'));

}

getUsers();