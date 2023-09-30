/**
 -Muốn  import từ file khác vào -> file đc import phải đc export
 - có 2 loại import, export
 + default
 + named

 */



const user = {
    name: 'Ha',
    email: 'ha@gmail.com'
};

const course = {
    name: 'FullStack',
    price: 5000,
}
function getUser() {
    return user;
}
//export default

export { user, course };