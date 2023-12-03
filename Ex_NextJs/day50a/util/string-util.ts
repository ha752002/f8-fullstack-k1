export const emailValidate = (email: string) => {
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return pattern.test(email);
}


export const passwordValidate = (password: string) => {
    const regex = /^.{3,}$/;
    return regex.test(password);
}