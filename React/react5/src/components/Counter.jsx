import React, { useRef, useState } from 'react';

const Search = () => {
    // bước 1: tạo một tham chiếu useRef có tên là helloRef và khởi tạo nó với giá trị 0
    const helloRef = useRef(0);
    //   console.log(helloRef);

    let a = 0;

    // trạng thái number được khởi tạo với giá trị 0.
    const [number, setNumber] = useState(0);

    // khi nút được nhấn, bạn cập nhật biến trạng thái number bằng cách sử dụng setNumber(number + 1).
    // Điều này gây ra một lần render lại của thành phần của bạn, nhưng giá trị của useRef vẫn không thay đổi.
    const handleClick = () => {
        setNumber(number + 1);
        // helloRef.current = "Number: " + (number + 1);
        helloRef.current++;
        a++;
        console.log(`number: ${number}`, a, `ref: ${helloRef.current} `);
    };
    //   console.log(helloRef.current);
    return (
        <>
            <input type="search" placeholder="Nhập từ khóa tìm kiếm"></input>
            <button onClick={handleClick}>Click me</button>
        </>
    );
};

export default Search;
