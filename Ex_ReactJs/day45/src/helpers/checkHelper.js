

export const handleCheck = (number, valueInput) => {
    if (number === valueInput) {
        return true;
    } else if (number > valueInput) {
        return '😝 Bạn cần tăng giá trị lên 1 chút';
    } else {
        return '😏 Bạn cần giảm giá trị xuống 1 chút';
    }
}