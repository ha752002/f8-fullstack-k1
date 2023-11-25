"use client"
import  Link from  "next/link"
import  "@/assets/style.css"
import {usePathname} from "next/navigation";
import clsx from "clsx";
const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav>
            <div>
                <ul >
                    <li className={clsx(pathname === "/" && "active")}> <Link href="/">Trang Chủ </Link></li>
                    <li className={clsx(pathname === "/posts" && "active")} > <Link href="/posts">Tin Tuc</Link></li>
                    <li className={clsx(pathname === "/product" && "active")}> <Link href="/product">San Pham</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;