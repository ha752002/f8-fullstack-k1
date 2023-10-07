//Async Await

/**
 * Async là 1 function => luôn trả về 1 promise
 */

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Hoang An');
            reject('Lỗi mạng');
        }, 1000);
    })
}
(async () => {
    // const data = await getData();
    // console.log(data);
    try {
        const data = getData().catch((data) => {
            console.log(data);
        });
    } catch (e) {
        console.log(e);
    } finally {
        console.log('Hoan thanh');
    }
})();
const getName = async () => {
    // return 'Hoang An';
    const data = await getData();
    console.log(data);
}


getName().then((data) => {
    console.log(data);
})



// const getA = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('get A');
//         }, 1000);
//     })
// }


// const getB = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('get B');
//         }, 2000);
//     })
// }


const getC = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('get C');
        }, 500);
    })
}


// (async () => {
//     // console.log(data);
//     const a = await getA();
//     console.log(a);
//     const b = await getB();
//     console.log(b);
//     const c = await getC();
//     console.log(c);

// })();



const getRequest = () => {
    return new Promise((resolve) => {
        // const response = {};

        // resolve(response);
        setTimeout(() => {
            const response = {
                text: () => {
                    return new Promise((resolve, reject) => {
                        resolve(JSON.stringify(data));
                    });
                },

                json: () => {
                    return new Promise((resolve, reject) => {
                        resolve(data);
                    });
                }

            };
            const data = {
                name: 'Hoang An',
                email: 'hoangAn@example.com'
            }

            resolve(response);

        }, 1000);
    })
}

// getRequest()
//     .then((response) => {

//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })



(async () => {
    const response = await getRequest();
    const data = await response.json();

})();
