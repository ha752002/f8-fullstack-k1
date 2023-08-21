/**
 * # Bài 2:
-Viết một hàm tạo (Constructor) để khởi tạo ra
  một đối tượng có 3 thuộc tính: name, age và address.
 - Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng
  để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.
 -Kết quả trả về là một mảng chứa tất cả thông tin 
 của các đối tượng đó được sắp xết tăng dần theo tuổi và
  thêm một thuộc tính mới là shortName của mỗi đối tượng.
 */

function Customer(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

function createCustomers(customers) {
    const validCustomers = customers?.filter?.(function (customer) {
        return (
            customer?.name && typeof customer.name === 'string' &&
            customer?.age && typeof customer.age === 'number' && customer.age > 0 &&
            customer?.address && typeof customer.address === 'string'
        );
    });

    return validCustomers?.length ?
        (validCustomers.sort((a, b) => a.age - b.age),
            validCustomers.map?.(function (customer) {
                const customerName = customer.name.split(" ");
                customer.shortName = `${customerName[0]} ${customerName[customerName.length - 1]}`;
                return customer;
            }))
        : "Dữ liệu sai! Vui lòng nhập lại.";
}

const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Hà Nội" },
    { name: "Nguyễn Văn B", age: 2, address: "Hải Phòng" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

console.log(createCustomers(customers));