// var action = "edit";

// if( action === "insert" || action === "add" || action === "create") {
//     console.log("thêm");
// }else if ( action === "edit" || action === "update") {
//     console.log("sửa");

// } else if (action === "delete" || action === "remove"|| action === "destroy"){
//     console.log("xoa");
// } else {
//     console.log("danh sach");

// }

// var action = ["edit"];

var month  = 11;
if( month % 1 == 0 && month >= 1 && month < 12) {
    var days;
    month = +month;
    switch (month) {
        case 2: 
            days = 29;
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        
        default:
            days = 31;
            break;

    }
    console.log(`thang ${month} có ${days} ngày`);

}else {
    alert("Vui long nhap lai");
}



