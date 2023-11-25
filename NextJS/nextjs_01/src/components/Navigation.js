"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import {useEffect} from "react";

const Navigation = () => {
    // lấy pathname

    const pathname = usePathname();
    // console.log(pathname)
    useEffect(() =>{
        console.log("Hi Bachsss")
    },[])

    return (
        <div>
            <ul>
                <li className={clsx(pathname === "/" && "active")}>
                    <Link href="/">Trang Chủ</Link>
                </li>
                <li className={clsx(pathname === "/san-pham" && "active")}>
                    <Link href="/">Sản Phẩm</Link>
                </li>
                <li className={clsx(pathname === "/tin-tuc" && "active")}>
                    <Link href="/">Tin Tức</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;