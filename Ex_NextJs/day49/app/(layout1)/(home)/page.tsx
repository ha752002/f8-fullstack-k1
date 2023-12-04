"use client"
import {apiClient} from "@/services/api";
import useSWR from "swr";
import Image from "next/image";
import {Link} from "@nextui-org/link";
import {useRouter, useSearchParams} from "next/navigation";
import {TravelResponse} from "@/types";
import {Button} from "@nextui-org/button";

const fetcher = (url: string) => apiClient.get(url).then(res => res.data)
const Home = () => {
    const router = useRouter();
    const searchParam = useSearchParams();
    const {data, error, isLoading } = useSWR('/api/travel?q=' + (searchParam?.get('q') ?? ""), (url) => apiClient.get(url).then(res => res.data))
    // console.log(data)
    if (isLoading){
        return <>...Loading</>
    }
    if (error){
        return <>Error</>
    }
    return (
        <>
            <div>
                {
                    data && data.travels.length > 0 && data.travels.map((travel: TravelResponse) => (
                        <div className="box" key={travel.id}>

                            <Image loader={(src) => travel.thumbnail}
                                   src={travel.thumbnail}
                                   alt={"Picture of the destinationBox"} width={200} height={200}/>
                            <div className="content">
                                <h3><i className="fas fa-map-marker-alt"></i> {travel.title}</h3>
                                <p>{travel.description}</p>
                            </div>
                            {/*<NextLink href={`/product-detail/[id]`} as={`/product-detail/${travel.id}`} >*/}
                            <Button onClick={(e) => {
                                router.push(`/product-detail/${travel.id}`);
                            }} color={"success"}>Product detail</Button>
                            {/*</NextLink>*/}
                        </div>
                    ))
                }
            </div>
        </>


    );
};

export default Home;