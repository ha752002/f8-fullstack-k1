"use client"
import Link from 'next/link'
import {useRouter} from "next/navigation";

const Home = () => {
    const router = useRouter();
    const handleGoAdmin = () => {
        router.push("/products")
    }
    return (
        <div>
            <h1>Trang Chu F8</h1>
            <h3>
                <Link href="/san-pham">Danh sach san pham</Link>
            </h3>
            <button onClick={handleGoAdmin}>Vao Trang Quan tri</button>
        </div>
    );
};

export default Home;