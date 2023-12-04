"use client"
import useSWR from "swr";
import Image from "next/image";
import {CatResponse} from "@/types/cat-type";
import {ErrorResponse} from "@/types/api-type";

export default function Home() {
    const {
        data,
        isLoading,
        error
    } = useSWR<Array<CatResponse>, string>("https://api.thecatapi.com/v1/images/search?limit=10",  async (url: string) => {
        const data = await fetch(url);
        return await data.json();
    }, {
        fallbackData: [
            {
                id: "48f",
                url: "https://cdn2.thecatapi.com/images/48f.gif",
                width: 317,
                height: 198
            },
        ]
    });
    // if (isLoading) {
    //     return <p>...Loadingggg</p>
    // }
    if (error) {
        return <p>{error}</p>
    }
    console.log(data)
    return (
        <>
            {data && data.length > 0 && data.map(cat => {
                return <div key={cat.id}>
                    <Image loader={(src) => cat.url} src={cat.url} alt={cat.id} width={cat.width} height={cat.height}/>
                </div>
            })}
        </>
    );
}
