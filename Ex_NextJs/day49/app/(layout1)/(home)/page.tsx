"use client"
import {apiClient} from "@/services/api";
import useSWR from "swr";
import Image from "next/image";
import {Link} from "@nextui-org/link";
import {useSearchParams} from "next/navigation";

const fetcher = (url: string) => apiClient.get(url).then(res => res.data)
const Home = () => {
    const searchParam = useSearchParams();
    const {data, error} = useSWR('/pages?q='+ searchParam.get('q'), (url) =>  apiClient.get(url).then(res => res.data))
    // console.log(`data`,data);
    // console.log(`error`,error);
    return (
        <>
            <div>
                {
                data && data.length > 0 && data[0].destinationBox.map((destination: {
                        h3: string;
                        p: string;
                        src: string;
                        id: number;
                    }) => (
                        <div className="box" key={destination.id}>
                            <Link href={`/product-detail/${destination.id}`}>
                                <Image loader={(src) => `${process.env.NEXT_PUBLIC_API_IMG}${destination.src}`}
                                          src={`${process.env.NEXT_PUBLIC_API_IMG}${destination.src}`}
                                          alt={"Picture of the destinationBox"} width={200} height={200}/>
                                <div className="content">
                                    <h3><i className="fas fa-map-marker-alt"></i> {destination.h3}</h3>
                                    <p>{destination.p}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>


    );
};

export default Home;