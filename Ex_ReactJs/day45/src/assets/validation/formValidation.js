export const formValidate = (value) => {
    const pattern = /^([1-9][0-9]?)?$/;
    var check = pattern.test(value);
    return check;
}

