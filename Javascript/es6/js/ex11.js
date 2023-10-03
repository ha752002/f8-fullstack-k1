
const getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [
                {
                    id: 1,
                    name: "User 1",
                    salary: 1000,
                },
                {
                    id: 2,
                    name: "User 2",
                    salary: 2000,

                },
                {
                    id: 3,
                    name: "User 1",
                    salary: 3000,

                },];
            const user = users.find(({ id: _id }) => _id === id);
            resolve(user);
        }, 1000);
    });
};


// users.forEach(async ({ id }) => {
//     const data = await getUser(id);
//     console.log(data);
// })


const lists = [1, 2, 3];
// tinh tong thu nhap co tat ca user co trong mang list
// let total = 0;
// lists.forEach(async (id) => {
//     const user = await getUser(id);
//     total += user.salary;
// });

// const getSalary = async () => {
//     for (let id of lists) {
//         const user = await getUser(id);
//         total += user.salary;
//     }

//     console.log(total);
// }

// getSalary();

const requests = lists.map(async (id) => await getUser(id));
// console.log(requests);


Promise.all(requests).then((users) => {
    const total = users.reduce((total, user) => total + user.salary, 0);
    console.log(total);
})
