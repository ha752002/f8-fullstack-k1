"use client"

import {useSearchParams} from "next/navigation";

const ProductLists = () => {
    const searchParams = useSearchParams();
    return (
        <div>
            <h1>Danh sach san pham</h1>
            <h3>Trạng thái : {searchParams.get("status")}</h3>
            <h3>Trạng thái : {searchParams.get("keywords")}</h3>
            <form action="" method="GET">
                <select name="status" defaultValue={searchParams.get("status") ?? ""}>
                    <option value="all">Tất cả</option>
                    <option value="active">kích hoạt</option>
                    <option value="inactive">Chưa kích hoạt </option>
                </select>
                <input name="keywords" defaultValue={searchParams.get("keywords") ?? ""} type="search" placeholder="Từ khóa tìm kiếm"/>
                <button>Lọc</button>
            </form>
        </div>
    );
};

export default ProductLists;