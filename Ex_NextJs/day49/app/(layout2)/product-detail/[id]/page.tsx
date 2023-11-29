"use client"

import {useParams, useRouter} from "next/navigation";
import useSWR from "swr";
import {apiClient} from "@/services/api";
import {Link} from "@nextui-org/link";
import Image from "next/image";
import {Button} from "@nextui-org/button";

const ProductDetail = () => {
    const params = useParams();
    const router = useRouter();
    const {data, error, isLoading } = useSWR('/api/travel/' + params?.id, (url) =>  apiClient.get(url).then(res => res.data))

    if (isLoading){
        return <>...loading</>
    }
    if (error){
        return <>Error</>
    }
    return (
        data && <div className="box">
                <Image loader={(src) => data.thumbnail}
                       src={data.thumbnail}
                       alt={"Picture of the destinationBox"} width={200} height={200}/>
                <div className="content">
                    <h3><i className="fas fa-map-marker-alt"></i> {data.title}</h3>
                    <p>{data.description}</p>
                </div>
            <Button onClick={(e) => {
                router.push(`/checkout/${data.id}`);
            }} color={"success"}>Checkout</Button>
        </div>
    );
};

export default ProductDetail;